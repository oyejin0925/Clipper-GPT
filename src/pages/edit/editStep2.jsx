import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom'; 
import { useState } from 'react'; 
import "../../assets/font/pretendard.css";
import btnUpload from "../../assets/img/editStep/btnUpload.png";
import btnUploadNonSelected from "../../assets/img/editStep/btnUploadNonSelected.png";
import btnUploadSelected from "../../assets/img/editStep/btnUploadSelected.png";
import videoCancel from "../../assets/img/editStep/videoCancel.png";
import btnEditGPS from "../../assets/img/editStep/btnEditGps.png";
import ProgressBar from '../../components/progressbar'; 
import EXIF from 'exif-js';
import btnGoBack from "../../assets/img/editStep/btnGoBack.png";

function EditStep2() {
    const navigate = useNavigate();
    const location = useLocation(); 
    const { email } = location.state || {}; 

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [thumbnails, setThumbnails] = useState([]);
    const [gpsInfos, setGpsInfos] = useState([]); 
    const [editingIndex, setEditingIndex] = useState(null);
    const [newGpsInfo, setNewGpsInfo] = useState(""); 

    console.log("받아온 이메일:", email);

    const handleFileChange = async (event) => {
        const files = Array.from(event.target.files);
        if (files.length + selectedFiles.length > 10) {
            alert("영상은 최대 10개까지 선택할 수 있습니다.");
            return;
        }

        const newThumbnails = await Promise.all(files.map(file => getThumbnail(file)));
        setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
        setThumbnails((prevThumbnails) => [...prevThumbnails, ...newThumbnails]);

        const newGpsInfo = await Promise.all(files.map(file => extractGPSInfo(file)));
        setGpsInfos((prevGpsInfos) => [...prevGpsInfos, ...newGpsInfo]);
    };

    const extractGPSInfo = (file) => {
        return new Promise((resolve) => {
            EXIF.getData(file, function() {
                const lat = EXIF.getTag(this, "GPSLatitude");
                const long = EXIF.getTag(this, "GPSLongitude");
                
                const gpsData = lat && long ? [`GPSLatitude: ${lat}`, `GPSLongitude: ${long}`] : ['GPS 정보가 없습니다.'];
                resolve(gpsData.join(', '));
            });
        });
    };

    const removeFile = (index) => {
        setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
        setThumbnails((prevThumbnails) => prevThumbnails.filter((_, i) => i !== index));
        setGpsInfos((prevGpsInfos) => prevGpsInfos.filter((_, i) => i !== index));
    };

    const getThumbnail = (file) => {
        return new Promise((resolve) => {
            const videoElement = document.createElement('video');
            videoElement.src = URL.createObjectURL(file);
            videoElement.muted = true;
            videoElement.preload = "auto";
    
            videoElement.oncanplay = () => {
                let canvas = document.createElement('canvas');
                canvas.width = videoElement.videoWidth;
                canvas.height = videoElement.videoHeight;
    
                let ctx = canvas.getContext('2d');
                ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    
                const dataUri = canvas.toDataURL();
                resolve(dataUri);
            };

            videoElement.onerror = () => {
                console.error("비디오 로드 오류");
                resolve(null); // 썸네일 생성을 실패할 경우 null 반환
            };
        });
    };

    const handleComplete = () => {
        if (selectedFiles.length === 0) {
            alert("비디오를 선택해주세요.");
            return;
        }

        const filesWithThumbnails = selectedFiles.map((file) => ({
            file,
        }));

        const thumbnailsToSend = thumbnails.filter(thumbnail => thumbnail !== null);

        navigate('../editstep3', { state: { files: filesWithThumbnails, thumbnails: thumbnailsToSend, email } });
    };

    const startEditingGPS = (index) => {
        setEditingIndex(index);
        setNewGpsInfo(gpsInfos[index]); 
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && editingIndex !== null) {
            setGpsInfos((prevGpsInfos) => {
                const updatedGpsInfos = [...prevGpsInfos];
                updatedGpsInfos[editingIndex] = newGpsInfo;
                return updatedGpsInfos;
            });
            setEditingIndex(null);
            setNewGpsInfo(""); 
        }
    };

    return (
        <Container>
            <GoBack onClick={() => navigate('/')} className="goback-button">
                <img src={btnGoBack} alt="Go Back" />
            </GoBack>
            <UploadContainer height={selectedFiles.length === 0 ? '180px' : '310px'}>
                <TextContainer>
                    <p>영상을 시간 순서대로 업로드해주세요.</p>
                    <p>영상은 10개 이하, 3시간 이하만 업로드 가능합니다.</p>
                </TextContainer>
                <BtnContainer>
                    <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                        <img src={btnUpload} alt="Upload" />
                    </label>
                    <input 
                        id="file-upload" 
                        type="file" 
                        accept="video/*" 
                        multiple 
                        onChange={handleFileChange} 
                        style={{ display: 'none' }}
                    />
                </BtnContainer>
                <SelectedFiles>
                    <FileList>
                        {selectedFiles.map((file, index) => (
                            <FileItem key={index}>
                                <Thumbnail src={thumbnails[index] || 'default-thumbnail.png'} alt="썸네일" />
                                <ItemInfo>
                                    <FileName>
                                        {file.name.length > 10 ? `${file.name.slice(0, 9)}...` : file.name}
                                    </FileName>
                                    {editingIndex === index ? (
                                        <GpsEditContainer>
                                            <input 
                                                type="text" 
                                                value={newGpsInfo} 
                                                onChange={(e) => setNewGpsInfo(e.target.value)} 
                                                onKeyDown={handleKeyDown}
                                                placeholder="수정할 GPS 정보를 입력하세요." 
                                            />
                                        </GpsEditContainer>
                                    ) : (
                                        <GpsInfo onClick={() => startEditingGPS(index)}>
                                            {gpsInfos[index]}
                                            <img 
                                                src={btnEditGPS} 
                                                style={{ paddingLeft: '5px', cursor: 'pointer' }} 
                                                alt="Edit GPS" 
                                            />
                                        </GpsInfo>
                                    )}
                                </ItemInfo>
                                <CancelIcon 
                                    src={videoCancel} 
                                    alt="Remove" 
                                    onClick={() => removeFile(index)} 
                                />
                            </FileItem>
                        ))}
                    </FileList>
                </SelectedFiles>
            </UploadContainer>
            <CompleteContainer onClick={handleComplete}>
                <img src={selectedFiles.length > 0 ? btnUploadSelected : btnUploadNonSelected} alt="Complete" />
            </CompleteContainer>
            <ProgressBar currentStep={2} />
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 50px);
    background-color: #E1E5EA;
    display: flex; 
    flex-direction: column;
    align-items: center;
    font-family: Pretendard-Regular;

    @media (max-width: 768px) {
        width: 100vw;
    }
`;

const GoBack = styled.div`
    cursor: pointer;
    align-self: flex-start;
    margin-top: 20px; margin-left: 23px;

    @media (min-width: 768px) {
        display: none;
    }
`;

const UploadContainer = styled.div`
    width: 456px; 
    height: ${(props) => props.height};
    background-color: white;
    padding: 30px 50px 10px 50px;
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 40px;

    @media (max-width: 768px) {
        width: 80%; // 모바일 화면에서 너비를 100%로 설정
        padding: 20px; // 모바일 화면에서 패딩 조정
    }
`;

const TextContainer = styled.div`
    text-align: center;
    color: #828282;
    p {
        margin: 0;
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 10px
`;

const SelectedFiles = styled.div`
    margin-top: 20px;
    text-align: center;
    color: #333;
    max-height: 150px;
    overflow-y: auto;

    @media (max-width: 768px) {
        max-height: 135px;
    }
`;

const FileList = styled.div`
    max-height: 135px;
    overflow-y: auto;
    padding: 0 10px;

    @media (max-width: 768px) {
        max-height: 135px;
    }
`;

const FileItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 14px;
    background-color: #D9D9D9;
    padding: 5px 10px;
    border-radius: 5px;

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 5px;
    }
`;

const Thumbnail = styled.img`
    width: 30px; 
    height: 30px;
    margin-right: 8px;
    border-radius: 5px;

    @media (max-width: 768px) {
        width: 24px;
        height: 24px;
    }
`;

const ItemInfo = styled.div`
    display: flex;
    justify-content: space-between; 
    flex-grow: 1;
`;

const FileName = styled.span`
    width: 120px;
    text-align: left;
    margin-left: 20px;

    @media (max-width: 768px) {
        width: 100px;
    }
`;

const GpsInfo = styled.span`
    font-size: 12px; 
    margin-right: 20px;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const GpsEditContainer = styled.div`
    display: flex;
    align-items: center;
    input {
        margin-right: 10px;
        font-size: 12px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: #D9D9D9;

        @media (max-width: 768px) {
            font-size: 10px; 
            width: 70px;
        }
    }
`;

const CancelIcon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 16px;
        height: 16px;
    }
`;

const CompleteContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 130px;
    left: 50%;
    transform: translateX(-50%); 
    cursor: pointer;

    @media (max-width: 768px) {
        bottom: 150px; // 모바일 화면에서 버튼 위치 조정
    }
`;

export default EditStep2;
