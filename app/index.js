import { Stack } from 'expo-router';
import { View, TextInput, Text, SafeAreaView, useColorScheme, StyleSheet, ImageBackground, Dimensions} from 'react-native';
// import Bottom from '../components/Bottom';
import { coffeIcon as CoffeIcon, userIcon as UserIcon, homeIcon as HomeIcon, SVGComponent as SearchIcon } 
	from '../src/icon/Icons';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;		
const Home = () =>{
	return (
		<SafeAreaView style={style.page}>
			<Stack.Screen options={{
				headerShown: false
			}} />

			<View style={style.item}>
				<View style={style.item_container}>
					<View style={[style.top, style.component]}>
						<TextInput
							style={style.top__item}
							placeholder="Поиск"
						/>
						<View style={style.icon}>
							<SearchIcon />
						</View>
					</View>
				</View>
			</View>

			<View style={[style.item, { flex: 5 }]}>
				<View style={style.item_container}>

				</View>
			</View>

			<View style={style.item}>
				<View style={style.item_container}>
					<View style={[style.bottom, style.component]}>
						<View style={style.icon}>
							<UserIcon />
						</View>

						<View style={style.icon}>
							<CoffeIcon />
						</View>

						<View style={style.icon}>
							<HomeIcon />
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

const style = StyleSheet.create({
	page: {
		flex: 1,
		padding: 5,
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		alignItems: 'center'
	},

	item: {
		flex: 1,
		width: '96%',
		backgroundColor: 'gray',
		margin: 5,
		alignItems: 'center',
	},

	icon: {
		backgroundColor: '#365ED0',
		borderRadius: 50,
		width: '10%',
		height: '100%',
		maxWidth: 50,
		maxHeight: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},

	item_container:{
		width: '100%',
		maxWidth: 500, 
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	component: {
		width: '90%',
		height: '40%',
		backgroundColor: 'white',
		borderRadius: 50,
		padding: 5,
		flexDirection: 'row',
		borderColor: '#365ED0',
		borderWidth: 2,
	},

	top: {
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	top__item: {
		backgroundColor: '#F2F2F2',
		height: '90%',
		width: '70%',
		borderRadius: 50,
		paddingLeft: 20,
		outlineStyle: 'none'
	},

	bottom: {
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})

export default Home;
