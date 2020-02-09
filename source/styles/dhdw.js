import { Dimensions, PixelRatio } from 'react-native';

 let deviceWidth = Dimensions.get('screen').width
 let deviceHeight = Dimensions.get('screen').height
 const dh = x => PixelRatio.roundToNearestPixel((deviceHeight * x) / 100)
 const dw = x => PixelRatio.roundToNearestPixel((deviceWidth * x) / 100)
 
const AddOrientation = that => {
  Dimensions.addEventListener('change', newDimensions => {
    deviceWidth = newDimensions.screen.width;
    deviceHeight = newDimensions.screen.height;

    that.setState({
      orientation: deviceWidth < deviceHeight ? 'portrait' : 'landscape'
    });
  });
};

const RemoveOrientation = () => {
  Dimensions.removeEventListener('change', () => {});
};



export { dh, dw, AddOrientation, RemoveOrientation };