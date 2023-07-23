import { StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  logo:{
    maxHeight:200,
    maxWidth:300,
    width:'70%',
},
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#ffffff',
  },
  containerFluid: {
    flex: 1,
    padding: 0,
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor:'#fff'
  },
  contentContainer: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  headingNormal: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  headingMedium:{
    fontSize:27,
    fontWeight: 'bold',
  },
  headingLarge: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  headingBig: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 13,
    marginBottom: 8,
  },
  centered: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
//   Top Spacing Style
  mt1: {
    marginTop: 4,
  },
  mt2: {
    marginTop: 8,
  },
  mt3: {
    marginTop: 12,
  },
  mt4: {
    marginTop: 16,
  },
  mt5: {
    marginTop: 20,
  },
  mt6:{
    marginTop: 30,
  },
  mt7: {
    marginTop: 35,
  },
  mt8: {
    marginTop: 40,
  },
  mt10:{ 
    marginTop:55
  },
  mt11:{
    marginTop:100
  },
// Bottom Spacing
  mb1:{
    marginBottom: 10,
  },
  mb2:{
    marginBottom: 20,
  },
  mb3:{
    marginBottom: 30,
  },
  mb4:{
    marginBottom: 40,
  },
  mb5:{
    marginBottom: 50,
  },
  plr1:{
    paddingLeft: 10,
    paddingRight:10 
  },
  plr1:{
    paddingLeft: 10,
    paddingRight:10 
  },
  plr2:{
    paddingLeft: 20,
    paddingRight:20 
  },
  plr3:{
    paddingLeft: 30,
    paddingRight:30 
  },
  plr4:{
    paddingLeft: 40,
    paddingRight:40 
  },
  plr5:{
    paddingLeft: 50,
    paddingRight:50 
  },
  btn1:{
    paddingHorizontal:25,
    paddingVertical:15,
    borderRadius:30,
  },
  btn2:{
    paddingHorizontal:60,
    paddingVertical:15,
    backgroundColor:'#5865ff',
    borderRadius:7
  },
  btnText:{
    color:'#fff',
    alignItems:'center',
    fontWeight:'600',
  },
  btnCont:{
    backgroundColor:'#5865FF',
    width:'100%',
    padding:15,
    alignItems: 'center',
    borderRadius:10,
    marginTop:20,
    marginBottom:20
},
skipBtnCont: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

skipBtn:{
  position: 'absolute',
  top:10,
  right: 10,
  padding: 10,
  borderRadius: 5,
},
googleSocial: {
  backgroundColor: "#DD4D44",
  width: "43%",
  padding: 10,
  alignItems: "center",
  margin: 5,
  borderRadius: 5,
  marginTop: 35,
},
linkedSocial: {
  backgroundColor: "#0A66C2",
  width: "43%",
  padding: 10,
  alignItems: "center",
  margin: 5,
  borderRadius: 5,
  marginTop: 35,
},




});

export default styles;
