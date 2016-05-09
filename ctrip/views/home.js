'use strict'

import React,{
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions';

var slideImgs = [
  'http://dimg04.c-ctrip.com/images/fd/marketing/g5/M08/04/87/CggYr1cpwdiAfi-DAAFyYzHaC9M548_1536_581_24.jpg',
  'http://dimg04.c-ctrip.com/images/fd/marketing/g5/M04/5A/11/CggYr1cgdaGAVhiOAAIoKuyaGY0701_1536_581_24.jpg',
  'http://dimg04.c-ctrip.com/images/fd/marketing/g6/M06/17/58/CggYs1cptMuAAwAaAAB_YkZfBFE022_1536_581_24.png',
  'http://dimg04.c-ctrip.com/images/fd/marketing/g5/M03/63/B6/CggYsVcqp3iAYwhvAAJIzm2hDq4559_1536_581_24.jpg',
  'http://dimg04.c-ctrip.com/images/fd/marketing/g5/M0B/1B/13/CggYr1ci7FGAOoJcAAC80oLOgas288_1536_581_24.png'
];

var Icons = [
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png'
];

var badgeImgs = [
  'http://images4.c-ctrip.com/target/fd/basebusiness/g6/M07/1A/48/CggYs1cfaaGAeE_WAAARWRLz7vI344.png',
  'http://images4.c-ctrip.com/target/fd/basebusiness/g6/M08/06/D4/CggYtFcfaaGAH7PMAAARR2yKAGw179.png'
];

var subject_hotImgs = [
  'http://images3.c-ctrip.com/rk/201602/ad02-621-2.png',
  'http://pages.c-ctrip.com/gs_market/ad03621-310.png',
  'http://images3.c-ctrip.com/rk/apph5/b1/201604/app_home_ad03_jx320160.png',
  'http://images3.c-ctrip.com/rk/apph5/B1/201602/app_home_ad04_320_160.png',
  'http://images3.c-ctrip.com/rk/apph5/C1/201604/app_home_ad52_621_310.jpg'
];

var subject_temaiImgs = [
  'http://dimg04.c-ctrip.com/images/vacations/images2/108/438/438_747_s28631_C_360_202.jpg',
  'http://dimg04.c-ctrip.com/images/t1/vacations/212000/211358/483c6db1b6034fc4a2bcdbfd7c87d658_C_360_202.jpg'
];

var slideHeight = Dimensions.get('window').width*121/320.0;
var moduleHeight = Dimensions.get('window').width*84/320.0;
var badgeImgWidth = (Dimensions.get('window').width - 10)/3.0;
var badgeImgHeight = moduleHeight / 2.0;
var gridViewHeight = Dimensions.get('window').width*120/320.0;
var subject_temai_height = Dimensions.get('window').width*140/320.0;
var subject_hot_height = Dimensions.get('window').width*270/320.0;

class Slider extends Component {
  render(){
    return (

        <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={slideHeight}
         activeDot = {<View style={{backgroundColor:'#1EA0DB', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
         scrollsToTop={true}
        >
          <Image style={[styles.slide,]} source={{uri:slideImgs[0]}}/>
          <Image style={[styles.slide,]} source={{uri:slideImgs[1]}}/>
          <Image style={[styles.slide,]} source={{uri:slideImgs[2]}}/>
          <Image style={[styles.slide,]} source={{uri:slideImgs[3]}}/>
          <Image style={[styles.slide,]} source={{uri:slideImgs[4]}}/>
        </Swiper>

    );
  }
}

class SearchBarView extends Component {
    render(){
      return (
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBarView}>
            <Image source={require('./searchbar_imgs/search_icon.png')}
            style={{height:18,width:18,alignSelf:'center',marginLeft:5} } />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="宋仲基见面会"
              style={styles.searchBarInput}
            />
            <Image source={require('./searchbar_imgs/voice_icon.png')}
            style={{height:18,width:18,alignSelf:'center',marginLeft:0} } />
          </View>
          <View style={styles.messageView}>
            <Image source={require('./searchbar_imgs/message_icon.png')}
            style={{height:22,width:22} } />
          </View>
        </View>
      );
    }
}

export default class Home extends Component {

  _renderPriceBarView(price:number){
    return (
      <View style={styles.sub_subject_temai_priceBarView}>
        <View style={styles.sub_subject_temai_priceBar_desc}>
          <Text style={{color:'white',fontSize:10}}>席位充足</Text>
        </View>
        <View style={styles.sub_subject_temai_priceBar_spaceView}></View>
        <Text style={{color:'#EB384D',fontSize:8}}>￥</Text>
        <Text style={{color:'#EB384D',fontSize:16}}>{price}</Text>
        <Text style={{color:'white',fontSize:12}}>起</Text>
      </View>
    );
  }

  render(){
    return (
      <View style={[styles.container]}>
        {/*<SearchBarView />*/}
        <ScrollView style={styles.scrollView}
          onScroll={()=>{
            console.log('onScroll!');
          }}
        >
          <View style={[styles.container]}>
            <Slider />

            <View style={[styles.sbu_view,styles.sbu_red,styles.sbu_borderRadius_top]}>

              <View style={[styles.sub_border_right,styles.sub_flex]}>
                <View style={[styles.sub_flex,styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>酒店</Text>
                </View>
                <View style={[styles.sub_flex,styles.sub_icon_flex]}>
                  <Image source={{uri:Icons[0]}} style={styles.sub_icon_img}></Image>
                </View>
              </View>

              <View style={[styles.sub_border_right,styles.sub_flex]}>
                <View style={[styles.sub_border_bottom,styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>海外酒店</Text>
                </View>
                <View style={[styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>特价酒店</Text>
                </View>
              </View>

              <View style={styles.sub_flex}>
                <View style={[styles.sub_border_bottom,styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>团购</Text>
                </View>
                <View style={[styles.sub_icon_flex]}>
                  <Image style={styles.sub_badgeImg} source={{uri:badgeImgs[0]}}>
                    <Text style={[styles.sub_text,styles.font18]}>名宿·客栈</Text>
                  </Image>
                </View>
              </View>

            </View>

            <View style={[styles.sbu_view,styles.sbu_blue]}>
              <View style={[styles.sub_border_right,styles.sub_flex]}>
                <View style={[styles.sub_flex,styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>机票</Text>
                </View>
                <View style={[styles.sub_flex,styles.sub_icon_flex]}>
                  <Image source={{uri:Icons[1]}} style={styles.sub_icon_img}></Image>
                </View>
              </View>

              <View style={[styles.sub_border_right,styles.sub_flex]}>
                <View style={[styles.sub_border_bottom,styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>火车票</Text>
                </View>
                <View style={[styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>国际机票</Text>
                </View>
              </View>

              <View style={styles.sub_flex}>
                <View style={[styles.sub_border_bottom,styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>汽车票·船票</Text>
                </View>
                <View style={[styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>自驾·专车</Text>
                </View>
              </View>
            </View>

            <View style={[styles.sbu_view,styles.sbu_green]}>
              <View style={[styles.sub_border_right,styles.sub_flex]}>
                <View style={[styles.sub_flex,styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>旅游</Text>
                </View>
                <View style={[styles.sub_flex,styles.sub_icon_flex]}>
                  <Image source={{uri:Icons[2]}} style={styles.sub_icon_img}></Image>
                </View>
              </View>

              <View style={[styles.sub_border_right,styles.sub_flex]}>
                <View style={[styles.sub_border_bottom,styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>攻略·身边</Text>
                </View>
                <View style={[styles.sub_icon_flex]}>
                  <Image style={styles.sub_badgeImg} source={{uri:badgeImgs[1]}}>
                    <Text style={[styles.sub_text,styles.font18]}>周边游</Text>
                  </Image>
                </View>
              </View>

              <View style={styles.sub_flex}>
                <View style={[styles.sub_border_bottom,styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>游轮</Text>
                </View>
                <View style={[styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>定制·包团</Text>
                </View>
              </View>

            </View>

            <View style={[styles.sbu_view,styles.sbu_yellow,styles.sbu_borderRadius_bottom]}>
              <View style={[styles.sub_border_right,styles.sub_flex]}>
                <View style={[styles.sub_border_bottom,styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>景点·玩乐</Text>
                </View>
                <View style={[styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>礼品卡</Text>
                </View>
              </View>

              <View style={[styles.sub_border_right,styles.sub_flex]}>
                <View style={[styles.sub_border_bottom,styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>美食</Text>
                </View>
                <View style={[styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>出境WiFi</Text>
                </View>
              </View>

              <View style={styles.sub_flex}>
                <View style={[styles.sub_border_bottom,styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>全球购·换汇</Text>
                </View>
                <View style={[styles.sub_icon_flex]}>
                  <Text style={[styles.sub_text,styles.font18]}>保险·签证</Text>
                </View>
              </View>

            </View>

            <View style={[styles.sbu_gridView,styles.sbu_white]}>

                <View style={[styles.sub_flex,styles.sub_grid_borderRight]}>
                  <View style={[styles.sub_grid_borderBottom,styles.sub_icon_flex]}>
                    <Image source={require('./grid_imgs/grid_01.png')} style={styles.sub_grid_icon_img} ></Image>
                    <Text>自由行</Text>
                  </View>
                  <View style={[styles.sub_icon_flex]}>
                    <Image source={require('./grid_imgs/grid_02.png')} style={styles.sub_grid_icon_img} ></Image>
                    <Text>酒店+景点</Text>
                  </View>
                </View>

                <View style={[styles.sub_flex,styles.sub_grid_borderRight]}>
                  <View style={[styles.sub_grid_borderBottom,styles.sub_icon_flex]}>
                    <Image source={require('./grid_imgs/grid_03.png')} style={styles.sub_grid_icon_img} ></Image>
                    <Text>主题游</Text>
                  </View>
                  <View style={[styles.sub_icon_flex]}>
                    <Image source={require('./grid_imgs/grid_04.png')} style={styles.sub_grid_icon_img} ></Image>
                    <Text>亲子·游学</Text>
                  </View>
                </View>

                <View style={[styles.sub_flex,styles.sub_grid_borderRight]}>
                  <View style={[styles.sub_grid_borderBottom,styles.sub_icon_flex]}>
                    <Image source={require('./grid_imgs/grid_05.png')} style={styles.sub_grid_icon_img} ></Image>
                    <Text>一日游</Text>
                  </View>
                  <View style={[styles.sub_icon_flex]}>
                    <Image source={require('./grid_imgs/grid_06.png')} style={styles.sub_grid_icon_img} ></Image>
                    <Text>外币兑换</Text>
                  </View>
                </View>

                <View style={styles.sub_flex}>
                  <View style={[styles.sub_grid_borderBottom,styles.sub_icon_flex]}>
                    <Image source={require('./grid_imgs/grid_07.png')} style={styles.sub_grid_icon_img} ></Image>
                    <Text>顶级游</Text>
                  </View>
                  <View style={[styles.sub_icon_flex]}>
                    <Image source={require('./grid_imgs/grid_08.png')} style={styles.sub_grid_icon_img} ></Image>
                    <Text>更多</Text>
                  </View>
                </View>

            </View>

            <View style={[styles.sbu_subject_view,{height:subject_temai_height}]}>

              <View style={styles.sub_subject_titleView}>
                <Image source={require('./subject_imgs/subject_title_01.png')} style={styles.sub_subject_tilte_img}/>
                <View style={styles.sub_subject_title_spaceView}></View>
                <View style={[styles.sub_subject_title_moreView,{backgroundColor: '#FF4F67'}]}>
                  <Text style={styles.sub_subject_title_more_text}>
                    更多特惠秒杀 >
                  </Text>
                </View>
              </View>

              <View style={styles.sub_subject_temai_contentView}>
                <View style={[styles.sub_flex,{padding:2}]}>
                  <Image source={{uri:subject_temaiImgs[0]}} style={styles.sub_subject_temai_img}>
                    {this._renderPriceBarView(2518)}
                  </Image>
                  <Text style={styles.sub_subject_temai_desc_text}>
                    印度尼西亚巴厘岛5日4晚跟团游(4钻)·4星酒店+精油SPA+下午茶+1天自由+...
                  </Text>
                </View>

                <View style={[styles.sub_flex,{padding:2}]}>
                  <Image source={{uri:subject_temaiImgs[1]}} style={styles.sub_subject_temai_img}>
                    {this._renderPriceBarView(4599)}
                  </Image>
                  <Text style={styles.sub_subject_temai_desc_text}>
                    日本大阪+京都+箱银+东京6日5晚跟团游(3钻)·暑期三大主题游 D线1天free...
                  </Text>
                </View>
              </View>

            </View>

            <View style={[styles.sbu_subject_view,{height:subject_hot_height}]}>
              <View style={styles.sub_subject_titleView}>
                <Image source={require('./subject_imgs/subject_title_02.png')} style={styles.sub_subject_tilte_img}/>
                <View style={styles.sub_subject_title_spaceView}></View>
                <View style={[styles.sub_subject_title_moreView,{backgroundColor: '#FFAA3B'}]}>
                  <Text style={styles.sub_subject_title_more_text}>
                    获取更多福利 >
                  </Text>
                </View>
              </View>

              <View style={styles.sub_subject_hot_contentView}>
                <View style={[styles.sub_flex,styles.sub_grid_borderRight,{flexDirection:'column'}]}>
                  <View style={[styles.sub_grid_borderBottom,{flex:2}]}>
                    <Image source={{uri:subject_hotImgs[0]}} style={styles.sub_subject_hot_img}/>
                  </View>
                  <View style={[{flex:1}]}>
                    <Image source={{uri:subject_hotImgs[1]}} style={styles.sub_subject_hot_img}/>
                  </View>
                </View>

                <View style={[styles.sub_flex,{flexDirection:'column'}]}>
                  <View style={[styles.sub_flex,styles.sub_grid_borderBottom]}>
                    <Image source={{uri:subject_hotImgs[2]}} style={styles.sub_subject_hot_img}/>
                  </View>
                  <View style={[styles.sub_flex,styles.sub_grid_borderBottom]}>
                    <Image source={{uri:subject_hotImgs[3]}} style={styles.sub_subject_hot_img}/>
                  </View>
                  <View style={[styles.sub_flex]}>
                    <Image source={{uri:subject_hotImgs[4]}} style={styles.sub_subject_hot_img}/>
                  </View>
                </View>

              </View>

            </View>

          </View>

        </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainer:{
    marginTop:0,
    height: 64,
    backgroundColor: '#1EA0DB',
    flexDirection: 'row',
  },
  searchBarView:{
    height: 30,
    width: Dimensions.get('window').width - 70,
    marginLeft: 10,
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'lightgray',
    marginTop: 24,
    borderRadius: 3,
    backgroundColor:'white',
  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: 20,
    alignSelf: 'center',
  },
  messageView:{
    borderRadius:3,
    borderColor:'lightgray',
    borderWidth:1,
    width: 40,
    height: 30,
    marginLeft: 10,
    marginTop: 24,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView:{
    marginTop:-20,
    height: 660,
  },
  container:{
    marginTop:0,
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'flex-start',
  },
  wrapper:{
    height: slideHeight,
    alignSelf: 'flex-start',
  },
  slide: {
      marginTop:0,
       height: slideHeight,
       resizeMode: Image.resizeMode.contain,
   },
   sbu_view: {
     marginTop: 3,
     marginLeft: 5,
     marginRight: 5,
     marginBottom: 0,
     height: moduleHeight,
     borderWidth:1,
     flexDirection: 'row',
   },
   sbu_borderRadius_top: {
     borderTopLeftRadius: 5,
     borderTopRightRadius: 5,
   },
   sbu_borderRadius_bottom: {
     borderBottomLeftRadius: 5,
     borderBottomRightRadius: 5,
   },
   sbu_red: {
     backgroundColor: '#FA5267',
     borderColor: '#FA5267'
   },
   sbu_blue: {
     backgroundColor: '#439AFC',
     borderColor: '#439AFC'
   },
   sbu_green: {
     backgroundColor: '#54C53B',
     borderColor: '#54C53B'
   },
   sbu_yellow: {
     backgroundColor: '#FDA132',
     borderColor: '#FDA132'
   },
   sbu_white: {
     backgroundColor: '#FFFFFF',
     borderColor: '#FFFFFF'
   },
   sub_flex:{
    flex:1,
   },
   sub_border_right: {
     borderRightColor: 'white',
     borderRightWidth: 1,
   },
   sub_border_bottom: {
     borderBottomColor: 'white',
     borderBottomWidth: 1,
   },
   sub_icon_flex:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
   },
   sub_icon_img:{
     height: 50,
     width: 50,
     resizeMode:Image.resizeMode.contain,
   },
   sub_text:{
     justifyContent: 'center',
   },
   sub_badgeImg: {
     flex:1,
     width:badgeImgWidth,
     height:badgeImgHeight,
     resizeMode:Image.resizeMode.contain,
     justifyContent: 'center',
     alignItems: 'center',
   },
   font18:{
     fontSize: 18,
     color: '#FFFFFF',
     fontWeight: '400',
   },
  sbu_gridView:{
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    height: gridViewHeight,
    borderWidth:1,
    flexDirection: 'row',
    borderRadius:5,
  },
  sub_grid_borderRight:{
    borderRightWidth: 0.5,
    borderRightColor: '#F2F2F2',
  },
  sub_grid_borderBottom:{
    borderBottomWidth:0.5,
    borderBottomColor: '#F2F2F2',
  },
  sub_grid_icon_flex:{
    flex:1,
    alignItems: 'center',
  },
  sub_grid_icon_img: {
    height: 36,
    width: 36,
    resizeMode:Image.resizeMode.contain,
  },
  sbu_subject_view: {
    marginTop: 0,
    marginBottom: 10,
    borderWidth:0.5,
    borderColor: '#DEDEDE',
    backgroundColor: 'white',
  },
  sub_subject_titleView: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    height: 30 *Dimensions.get('window').width / 320.0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sub_subject_tilte_img: {
    width: 102,
    height: 20,
    resizeMode:Image.resizeMode.contain,
    marginLeft:5,
  },
  sub_subject_title_spaceView: {
    width:Dimensions.get('window').width - 212,
    backgroundColor: 'white',
  },
  sub_subject_title_moreView: {
    width: 100,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  sub_subject_title_more_text:{
    fontSize: 12,
    color: 'white',
  },
  sub_subject_temai_contentView:{
    flex:1,
    backgroundColor: 'white',
    height: subject_temai_height - 30 *Dimensions.get('window').width / 320.0,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sub_subject_temai_img:{
    height: Dimensions.get('window').width * 88 / 320.0,
    resizeMode:Image.resizeMode.contain,
    justifyContent: 'flex-end',
  },
  sub_subject_temai_priceBarView: {
    height : 26,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 0,
  },
  sub_subject_temai_priceBar_desc:{
    marginLeft:5,
    borderRadius:2,
    width: 48,
    height: 16,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sub_subject_temai_priceBar_spaceView:{
    width: (Dimensions.get('window').width / 2.0 - 14) - 106,
    backgroundColor: 'transparent',
  },
  sub_subject_temai_desc_text:{
    fontSize: 10,
  },
  sub_subject_hot_contentView:{
    flex: 1,
    backgroundColor: 'white',
    height: subject_hot_height - 30 *Dimensions.get('window').width / 320.0,
    flexDirection: 'row',
  },
  sub_subject_hot_img:{
    flex: 1,
    resizeMode:Image.resizeMode.contain,
  },



});
