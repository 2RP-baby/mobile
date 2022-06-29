const Main_Draw_View = createDrawerNavigator(
    {
        Main_View,

        Intro_Main : {
            screen : Intro_Main
        },

        CalenderMain:{
            screen :CalenderMain
        },

        BoardMain :{
            screen: BoardMain
        }
    },{

        drawerWidth: Dimensions.get("window").width * 0.5,

        contentComponent : SideMenu,

        contentOptions:{
            // activeBackgroundColor:'#32C5E6'
            activeTintColor : '#32C5E6'
        }
    }
)