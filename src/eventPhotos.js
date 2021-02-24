function importAll(r) {
    return r.keys().map(r);
}
const secondgeneralmeeting2020images = importAll(require.context('./images/SecondGeneralMeeting2020', false, /\.(png|jpe?g|svg)$/));
const dumplingnightimages = importAll(require.context('./images/DumplingNight', false, /\.(png|jpe?g|svg)$/));
const firstasiannightraidimages = importAll(require.context('./images/FirstAsianNightRAID', false, /\.(png|jpe?g|svg)$/));
const firstgeneralmeeting2019images = importAll(require.context('./images/FirstGeneralMeeting2019', false, /\.(png|jpe?g|svg)$/));
const firstgeneralmeeting2017images = importAll(require.context('./images/FirstGeneralMeeting2017', false, /\.(png|jpe?g|svg)$/));
const elcipse = importAll(require.context('./images/Eclipse', false, /\.(png|jpe?g|svg)$/));
const gingerbreadhousecontest = importAll(require.context('./images/GingerbreadHouseContest', false, /\.(png|jpe?g|svg)$/));
const noir = importAll(require.context('./images/Noir', false, /\.(png|jpe?g|svg)$/));
const secondgeneralmeeting2018images = importAll(require.context('./images/SecondGeneralMeeting2018', false, /\.(png|jpe?g|svg)$/));
const blancheimages = importAll(require.context('./images/Blanche', false, /\.(png|jpe?g|svg)$/));
const firstgeneralmeeting2018images = importAll(require.context('./images/FirstGeneralMeeting2018', false, /\.(png|jpe?g|svg)$/));
const wickedimages = importAll(require.context('./images/Wicked', false, /\.(png|jpe?g|svg)$/));
const secondgeneralmeeting2019images = importAll(require.context('./images/SecondGeneralMeeting2019', false, /\.(png|jpe?g|svg)$/));
const euphoriaimages = importAll(require.context('./images/Euphoria', false, /\.(png|jpe?g|svg)$/));



var SecondGeneralMeeting2020=[];
var DumplingNight=[];
var FirstAsianNightRAID=[];
var FirstGeneralMeeting2019=[];
var FirstGeneralMeeting2017=[];
var Elcipse=[];
var GingerbreadHouseContest=[];
var Noir=[];
var SecondGeneralMeeting2018=[];
var Blanche=[];
var FirstGeneralMeeting2018=[];
var Wicked=[];
var SecondGeneralMeeting2019=[];
var Euphoria=[];


for(var i=0;i<secondgeneralmeeting2020images.length;i++){
    SecondGeneralMeeting2020.push(
        {
            src:secondgeneralmeeting2020images[i].default,
            width:3,
            height:2
        }
    )
}

for(var i=0;i<dumplingnightimages.length;i++){
    DumplingNight.push(
        {
            src:dumplingnightimages[i].default,
            width:3,
            height:2
        }
    )
}

for(var i=0;i<firstasiannightraidimages.length;i++){
    FirstAsianNightRAID.push(
        {
            src:firstasiannightraidimages[i].default,
            width:3,
            height:2
        }
    )
}

for(var i=0;i<firstgeneralmeeting2019images.length;i++){
    FirstGeneralMeeting2019.push(
        {
            src:firstgeneralmeeting2019images[i].default,
            width:3,
            height:2
        }
    )
}
for(var i=0;i<firstgeneralmeeting2017images.length;i++){
    FirstGeneralMeeting2017.push(
        {
            src:firstgeneralmeeting2017images[i].default,
            width:2,
            height:1
        }
    )
}
for(var i=0;i<elcipse.length;i++){
    Elcipse.push(
        {
            src:elcipse[i].default,
            width:3,
            height:2
        }
    )
}
for(var i=0;i<gingerbreadhousecontest.length;i++){
    GingerbreadHouseContest.push(
        {
            src:gingerbreadhousecontest[i].default,
            width:3,
            height:2
        }
    )
}
for(var i=0;i<noir.length;i++){
    Noir.push(
        {
            src:noir[i].default,
            width:3,
            height:2
        }
    )
}
for(var i=0;i<secondgeneralmeeting2018images.length;i++){
    SecondGeneralMeeting2018.push(
        {
            src:secondgeneralmeeting2018images[i].default,
            width:3,
            height:2
        }
    )
}
for(var i=0;i<blancheimages.length;i++){
    Blanche.push(
        {
            src:blancheimages[i].default,
            width:3,
            height:2
        }
    )
}
for(var i=0;i<firstgeneralmeeting2018images.length;i++){
    FirstGeneralMeeting2018.push(
        {
            src:firstgeneralmeeting2018images[i].default,
            width:3,
            height:2
        }
    )
}
for(var i=0;i<wickedimages.length;i++){
    Wicked.push(
        {
            src:wickedimages[i].default,
            width:3,
            height:2
        }
    )
}
for(var i=0;i<secondgeneralmeeting2019images.length;i++){
    SecondGeneralMeeting2019.push(
        {
            src:secondgeneralmeeting2019images[i].default,
            width:3,
            height:2
        }
    )
}
for(var i=0;i<euphoriaimages.length;i++){
    Euphoria.push(
        {
            src:euphoriaimages[i].default,
            width:3,
            height:2
        }
    )
}


export {SecondGeneralMeeting2020, DumplingNight, FirstAsianNightRAID, FirstGeneralMeeting2019, FirstGeneralMeeting2017, Elcipse, GingerbreadHouseContest, Noir, SecondGeneralMeeting2018, Blanche, FirstGeneralMeeting2018
,Wicked, SecondGeneralMeeting2019, Euphoria
};