import GetLocation from 'react-native-get-location'

const getLocation = async () => {
    return GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
    })
    .then(location => {
        console.log(location);
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })
}

export default getLocation;