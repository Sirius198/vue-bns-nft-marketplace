import axios from 'axios';

const API_KEY = 'db8704ba57b0a52fe58c';
const SECRET =
  '1ccfe293b41a978b65f646b9d0027312391a69054dbde41d6b673bbfc0df144d';

export const handleSingleFileUpload = async (file) => {
  try {
    const data = new FormData();
    data.append(`file`, file);
    console.log(data)
    const res = await axios.post(
      `https://api.pinata.cloud/pinning/pinFileToIPFS`, data,
      {
        headers: {
          'Content-Type': `multipart/form-data`,
          pinata_api_key: `db8704ba57b0a52fe58c`,
          pinata_secret_api_key:  `1ccfe293b41a978b65f646b9d0027312391a69054dbde41d6b673bbfc0df144d`,
        },
      }
    );
    return getIpfsUrl(res.data.IpfsHash);
    // return res.data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export const handleMultipleFilesUpload = async (
  selectedFiles,
  wrapWithDirectory
) => {
  try {
    const data = new FormData();

    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        data.append(`file`, file);
      });
    } else {
      data.append('file', selectedFiles[0], selectedFiles[0].name);
    }
    if (wrapWithDirectory === true) {
      const pinataOptions = JSON.stringify({
        wrapWithDirectory: true,
      });
      data.append('pinataOptions', pinataOptions);
    }
    data.append(`file`, file);
    const res = await axios.post(
      `https://api.pinata.cloud/pinning/pinFileToIPFS`,
      data,
      getApiConfig()
    );

    return res.data;
  } catch (error) {
    //  Handle error
    console.log(error);
  }
};

export const getIpfsUrl = (IpfsHash) => {
  return 'https://ipfs.io/ipfs/' + IpfsHash;
}