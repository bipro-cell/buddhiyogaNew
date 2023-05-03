import React, { useState } from "react";
import { useEffect } from "react";
import { Text ,View, StyleSheet } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import RenderHtml from 'react-native-render-html';
const PostsContentComponent = (prop) => {
	const [source,setNewHtml]=useState({html:"Loading..."});
	useEffect(()=>{
		 getHtml();
	},[source.html.length]);
	const getHtml=()=>{
		var str="<p><strong>Audio</strong></p>";
		var excerpt="<hr/><p><strong>Excerpt</strong></p>"+prop.subTitle+"<hr/>"+str;
		var newStr= prop.content.split(str);
		// console.log(newStr);
		setNewHtml({html:newStr[0]+excerpt+newStr[1]});
	}
  const tagsStyles = {
	body: {
	  whiteSpace: 'normal',
	  color: 'black',
	  backgroudColor:'#F2D997',
	  fontSize: prop.fontSize,
	},
	a: {
	  color: 'black'
	}
  };
  
	return(
		
		<Card style={Styles.container}>
	<Card.Content>
  <RenderHtml
      source={source}
	  tagsStyles={tagsStyles}
    />
		</Card.Content>
	</Card>
		
	)
}
export default PostsContentComponent;

const Styles = StyleSheet.create({
	container :{
		alignContent:'center',
		marginBottom:100,
    marginHorizontal: 10,
    padding:10,
	backgroundColor:'#F2D997'
	}
})
