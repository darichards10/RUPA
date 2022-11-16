
class LotsInfo {
    #bounds;
    #centerPoint;
    #latLngBound;
    #imageName;
    #spots;
  
    constructor(bounds,imageName, ...spots) {
        this.#bounds = bounds;
        this.#imageName = imageName;
  
        this.#latLngBound = L.latLngBounds(this.#bounds[0],this.#bounds[1]);
        this.#centerPoint = [this.#bounds[1][0] / 2.0, this.#bounds[1][1] / 2.0];
        this.#spots = [...spots];
    }
  
    get bounds() {
        return this.#bounds;
    }
    get centerPoint() {
        return this.#centerPoint;
    }
    get latLngBound() {
        return this.#latLngBound;
    }
    get imageName() {
        return this.#imageName;
    }
    get spots() {
        return this.#spots;
    }
  }   

function lotpopup(e,map,info) {
    var sMap = null;
    //the popup requires no lot information
    if(document.getElementById("sMap") === null) {
        var popup = L.popup(e.latlng, {
        content: "<form method='POST'><div id='sMap'></div></form>",
        maxWidth: 1450,
        minWidth: 500,
        maxHeight: 1500,
        keepInView: true,
        className: 'popup'
        }).openOn(map);

        //this requires lot infomrations
        sMap = L.map('sMap', {
            crs: L.CRS.Simple,
            maxBounds: info.latLngBound,
            center: info.centerPoint,
            minZoom: 0,
            maxZoom: 7
        });
        var image = L.imageOverlay(info.imageName,info.bounds).addTo(sMap); 
        sMap.fitBounds(info.bounds);
        sMap.setView(info.centerPoint, 2);

        spotsview(sMap,info);
    }

    function spotsview(sMap,info) {
        info.spots.forEach(element => {
            element.display.addTo(sMap);
            element.display.on("click", function(e) {
                spotspopup(e,sMap,element);
            })
        });
    }

    function spotspopup(e,sMap,spot) {
        var popup = L.popup(e.latlng, {
            content: spot.content,
            keepInView: true
        }).openOn(sMap);
    }
}
   

    //All coordinates start in top left of polygon and flow clockwise
var lotMCord = [[37.135024,-80.550058],[37.134506,-80.549120],[37.134241,-80.549343],[37.134746,-80.550271]]; 

var lotHHCord = [[37.135071,-80.549324], [37.134840,-80.548857], [37.134506,-80.549120], [37.134780,-80.549576]];

var constructionzoneCord = [[37.139116,-80.548298], [37.138522,-80.547248], [37.137346,-80.548171], [37.137888,-80.549104]];

var lotNCord = [[37.135756,-80.548459], [37.135558,-80.548082], [37.134892,-80.548630], [37.135106,-80.549006]];

var lotJJCord = [[37.136197,-80.548109], [37.136013,-80.547781], [37.135684,-80.548028], [37.135889,-80.548377]];

var lotAACord = [[37.136582,-80.547760],[37.136405,-80.547363],[37.136059,-80.547642],[37.136264,-80.548050]];

var lotRCord = [[37.135449,-80.547869],[37.135308,-80.547616],[37.135013,-80.547858],[37.135176,-80.548131]];

var lotSCord = [[37.136959,-80.546485],[37.136737,-80.546109],[37.136442,-80.546388],[37.136660,-80.546737]];

var lotYCord = [[37.137673,-80.545825],[37.137536,-80.545546],[37.137288,-80.545809],[37.137425,-80.546034]];

var lotEECord = [[37.136886,-80.550234],[37.136360,-80.549156],[37.136219,-80.549253],[37.136792,-80.550326]];

var lotDDCord = [[37.136912,-80.552659],[37.137057,-80.550991],[37.136882,-80.550959],[37.136754,-80.552654]];

var lotACord = [[37.139089,-80.549237],[37.138995,-80.548464],[37.138516,-80.548893],[37.138593,-80.549660]];

var lotBCord = [[37.140414,-80.550771],[37.140282,-80.550449],[37.140106,-80.550535],[37.140282,-80.550926]];

var lotCCord = [[37.140637,-80.550690],[37.140483,-80.550331],[37.140380,-80.550385],[37.140530,-80.550728]];

var lotGGCord = [[37.141073,-80.552139], [37.140962,-80.551693], [37.140727,-80.551854], [37.140876,-80.552241]];

var lotFCord = [[37.139876,-80.552874], [37.139901,-80.552461], [37.139448,-80.552418], [37.139392,-80.552825]];

var lotGCord = [[37.139204,-80.552997], [37.139238,-80.552825], [37.138486,-80.552718], [37.138473,-80.552922]];

var lotJCord = [[37.134132,-80.551361], [37.133816,-80.550685],[37.133837,-80.549918],[37.133632,-80.549961],[37.133598,-80.550744],[37.133970,-80.551441]];

var lotLCord = [[37.138443,-80.545803], [37.138353,-80.545573], [37.137951,-80.545895], [37.138097,-80.546141]];

var lotCCCord = [[37.140265,-80.546479],[37.140547,-80.546072],[37.140637,-80.545605],[37.140620,-80.545160],[37.140517,-80.544800],[37.140355,-80.544468],[37.139461,-80.545197], [37.139444,-80.545535], [37.139944,-80.546409]];

var lotECord = [[37.142018,-80.547976],[37.141885,-80.547772],[37.141629,-80.547869],[37.141073,-80.546806], [37.140641,-80.547386], [37.141620,-80.549558], [37.141783,-80.549430], [37.141334,-80.548582]];

var lotUCord = [[37.142095,-80.547407],[37.141295,-80.545755],[37.141064,-80.545954],[37.141295,-80.546479], [37.141261,-80.546774], [37.141710,-80.547675]];

var lotFFCord = [[37.142695,-80.545996],[37.142507,-80.545449],[37.142344,-80.545546],[37.142113,-80.545202], [37.141754,-80.545567], [37.142259,-80.546597]];

var lotZCord = [[37.140386,-80.541844],[37.138624,-80.538851],[37.138307,-80.539151],[37.140069,-80.542091]];
var lotICord = [[37.135127,-80.550804],[37.135165,-80.550536],[37.134875,-80.550497],[37.134853,-80.550781]];
var lotPCord = [[37.137626,-80.554848],[37.137655,-80.554555],[37.13758,-80.55453],[37.137557,-80.55483]];
var lotKCord = [[37.136761,-80.554761],[37.136784,-80.554558],[37.136703,-80.554542],[37.136687,-80.554756]];
var lotGACord = [[37.139811,-80.555282], [37.139824,-80.555186], [37.139585,-80.555164], [37.139580,-80.555272]];
var clement1117 = [[37.137575,-80.555230], [37.137160,-80.555187], [37.137148,-80.555316], [37.137575,-80.555364]];
var clement1023 = [[37.137347,-80.554824],[37.137362,-80.554664],[37.137231,-80.5545648],[37.13725,-80.554325],[37.137123,-80.554304],[37.137092,-80.55459],[37.136969,-80.554578],[37.136961,-80.554778]];
var clement1019 = [[37.13771,-80.553929],[37.13772,-80.553779],[37.137287,-80.55373],[37.137287,-80.553867]];
var fairfax1028 = [[37.137154,-80.554189],[37.137177,-80.554019],[37.136763, -80.553969],[37.13677,-80.554145]];
var howe600 = [[],[],[],[]];
var howe621 = [[37.133348,-80.549306],[37.133275,-80.549081],[37.133171,-80.549204],[37.13322,-80.549391]];
var calhoun527 = [[],[],[],[]];
var calhoun525 = [[],[],[],[]];
var calhoun512 = [[],[],[],[]];
var calhoun602 = [[],[],[],[]];
var calhoun604 = [[],[],[],[]];
var davis521 = [[],[],[],[]];
var fairfax517 = [[],[],[],[]];
var fairfax515 = [[],[],[],[]];
var fairfax404 = [[],[],[],[]];
var madison303 = [[],[],[],[]];


function showLots(map) {
    //Contractor-Contruction lots
    var contractor = L.polygon(lotLCord, {color: 'green'}).addTo(map);
    var constructionzone = L.polygon(constructionzoneCord, {color: 'orange'}).addTo(map);
    //Parkinglots


    //Single letter lots
    var lotA = L.polygon(lotACord); 
    var lotB = L.polygon(lotBCord); 
    var lotC = L.polygon(lotCCord);
    var lotE = L.polygon(lotECord);
    var lotF = L.polygon(lotFCord);
    var lotG = L.polygon(lotGCord);
    //Need H
    var lotI = L.polygon(lotICord);
    var lotJ = L.polygon(lotJCord);
    var lotK = L.polygon(lotKCord);
    var lotM = L.polygon(lotMCord);
    var lotN = L.polygon(lotNCord);
    var lotP = L.polygon(lotPCord);
    var lotR = L.polygon(lotRCord);
    var lotS = L.polygon(lotSCord);
    var lotU = L.polygon(lotUCord);
    //need X    
    var lotY = L.polygon(lotYCord);
    //has no pass restriction
    var lotZ = L.polygon(lotZCord);
    
    
    var lotAA = L.polygon(lotAACord);
    //Need BB 
    //Need BF
    //Need BL
    var lotCC = L.polygon(lotCCCord);
    //Need DC
    var lotDD = L.polygon(lotDDCord);
    var lotEE = L.polygon(lotEECord);
    var lotFF = L.polygon(lotFFCord);
    var lotGA = L.polygon(lotGACord); //Grove avenue
    var lotGG = L.polygon(lotGGCord); //Hemphill & muse halls
    //Need HF  (hitting facility)
    var lotHH = L.polygon(lotHHCord); //Accross from Waldron
    //Need IM (IM fields; has 2 sections)
    var lotJJ = L.polygon(lotJJCord);
    //Need SL (stadium lot)
    //Need UD (university drive near stadium, has 4 parts surprisingly)
    //Need PS (printing shop)
    //Need Church   


    //Apartment Parking
    var lot1117 = L.polygon(clement1117, {color: 'purple'});
    var lot1023 = L.polygon(clement1023, {color: 'purple'});
    var lot1019 = L.polygon(clement1019, {color: 'purple'});
    var lot1028 = L.polygon(fairfax1028, {color: 'purple'});

    constructionzone.bindPopup("CONSTRUCTION ZONE");

    //Lot Info
    var LotCCInfo = new LotsInfo([[0,0],[137.2,182.3]],'Lot-CC.png', ...lotCCSpots)
    var LotIInfo = new LotsInfo([[0,0],[242.8,141.8]],'Lot-I.png',...lotISpots);
    var LotRInfo = new LotsInfo([[0,0],[200.3, 253.1]],'Lot-R.png',...lotRSpots);
    var LotSInfo = new LotsInfo([[0,0],[229.3,222.7]],'Lot-S.png',...lotSSpots);
    var LotYInfo = new LotsInfo([[0,0],[226.7,183.0]],'Lot-Y.png',...lotYSpots);

    var allLotsInfo = [LotCCInfo,LotIInfo,LotRInfo,LotSInfo,LotYInfo];

    
    var allLots = L.featureGroup([lotA, lotB, lotC, lotE, lotF, lotG,/*lotH,*/lotI,lotJ,lotK,
    lotM,lotN,lotP,lotR,lotS,lotU,/*lotX,*/lotY,lotAA,/*lotBB,lotBF,lotBL,*/lotCC,/*lotDC,*/
    lotDD,lotEE,lotFF,lotGA,lotGG,/*lotHF,*/lotHH,/*lotIM,*/lotJJ/*,lotSL,lotUD,lotPS,Church*/]);

    var facultyLots = L.featureGroup([lotA,lotB,lotC,lotE,lotF,lotG,lotJ,lotK,lotM,lotN,lotP,lotR,lotS,lotU,
        lotY,lotAA,/*lotBB,lotBL,lotDC,*/lotDD,lotEE,lotGA,lotGG,/*lotHF,*/lotHH,/*lotIM*/lotJJ/*,lotSL,lotUD,lotPS,Church*/]);
    //var disMetLots= L.layerGroup([]); 
    var residentLots = L.featureGroup([lotU,/*lotBF,*/lotCC,lotFF]);
    var commuterLots = L.featureGroup([lotE,lotK,lotM,lotP,lotU,lotY/*,lotBL,lotDC,lotIM*/]);
    var univApts = L.featureGroup ([lot1117,lot1023,lot1019,lot1028]); 
   
    var radioLot = RadioOrdering(pass); 
         
    function RadioOrdering (passid){
        var radioOrder = null; 
        if (passid == "red") {
            radioOrder = {
            "Faculty" : facultyLots,    
            "All": allLots,
            "Commuter" : commuterLots,
            //, "Disabled/Metered Parking" : dismGroup, 
            "univ-Apts" : univApts,
            "Resident" : residentLots
            
            
            }
        }  else if (passid == "yellow") {
            radioOrder = {
                "Commuter" : commuterLots,  
                "All": allLots,
                //, "Disabled/Metered Parking" : dismGroup, 
                "Faculty" : facultyLots, 
                "univ-Apts" : univApts,
                "Resident" : residentLots
                
            }

        } else if (passid == "black") {
            radioOrder = {
                //, "Disabled/Metered Parking" : dismGroup, 
                "All": allLots,
                "Commuter" : commuterLots,
                "Faculty" : facultyLots,
                "univ-Apts" : univApts,    
                "Resident" : residentLots
            }
 
        } else if (pass == "blue") { 
            radioOrder = {
                "Resident" : residentLots,
                "All": allLots,
                "Commuter" : commuterLots,
                 //, "Disabled/Metered Parking" : dismGroup, 
                 "univ-Apts" : univApts,
                "Faculty" : facultyLots  
                }
        } else if (pass == "purple") {
            radioOrder = {
                "Resident" : residentLots,
                "All": allLots,
                "Commuter" : commuterLots,
                 //, "Disabled/Metered Parking" : dismGroup, 
                 "univ-Apts" : univApts,
                "Faculty" : facultyLots  
                }
        }
        return radioOrder; 
    }

    function lotStyler (lot) {
        var lotStyle = null; 
        if (lot == allLots) {
            var lotStyle = {
                color: 'white', 
                fillColor: 'gray',
                linecap: 'round', 
                fillOpacity: 0.9
            };
        } else if (lot == facultyLots ){
            var lotStyle = {
                color: 'red', 
                fillColor: 'gray',
                linecap: 'round', 
                fillOpacity: 0.8
            }; 
        } else if (lot == residentLots){ 
            var lotStyle = {
                color: 'blue', 
                fillColor: 'gray',
                linecap: 'round', 
                fillOpacity: 0.8
            };
        } else if (lot == commuterLots){
            var lotStyle = {
                color: 'gold', 
                fillColor: 'gray',
                linecap: 'round', 
                fillOpacity: 0.8
            };
        } 
        /*else if (lot == disMetLots) {

        }*/
        return lotStyle; 

    }

    var layerControl = L.control.layers(radioLot, null, {collapsed: false, position: 'topright'}).addTo(map);
    switch(pass) {
        case "red":
            facultyLots.setStyle(lotStyler(facultyLots)); 
            map.addLayer(facultyLots);
            break;
        case "yellow":
            commuterLots.setStyle(lotStyler(commuterLots)); 
            map.addLayer(commuterLots);
            break;
        case "black":
            allLots.setStyle(lotStyler(allLots));  
            map.addLayer(allLots);
            break;
        case "blue":
            residentLots.setStyle(lotStyler(residentLots)); 
            map.addLayer(residentLots);
            break;
        case "purple": 
            map.addLayer(univApts);  
            break;

    }

    map.on('baselayerchange' , function(e){
        if (e.name == "All"){
            allLots.setStyle(lotStyler(allLots));  
             
        } else if (e.name == "Faculty"){
            facultyLots.setStyle(lotStyler(facultyLots)); 

        } else if (e.name == "Resident") {
            residentLots.setStyle(lotStyler(residentLots)); 

        } else if (e.name == "Commuter") {
            commuterLots.setStyle(lotStyler(commuterLots)); 

        }  else if (e.name == "offCampus") {
            univApts.setStyle({color: 'purple'}); 
        }
        // else if (e.name == "Disabled/Metered Parking") {
        //     allLots.setStyle(BaselotStyle); 
        //     facultyGroup.setStyle({color: 'black'}); 
        // }

    });
    initLots(dbinfo,allLotsInfo);
    initLotEvents(map);

    function initLotEvents(map) {
        lotCC.on("click", function(e) {
            lotpopup(e,map,LotCCInfo);
        })

        lotI.on("click", function(e) {
            lotpopup(e,map,LotIInfo);
        });

        lotR.on("click", function(e) {
            lotpopup(e,map,LotRInfo);
        });

        lotS.on("click", function(e) {
            lotpopup(e,map,LotSInfo);
        });

        lotY.on("click", function(e) {
            lotpopup(e,map,LotYInfo);
        });
    }
}

function initLots(dbinfo, lots) {
    for(let lotelement of lots) {
        for(let spotelement of lotelement.spots) {
            var foundSpot = false;
            for(let i = 0; i < dbinfo.length && !foundSpot; i++) {
                if(spotelement.lotLetter == dbinfo[i].LotLetter &&
                    spotelement.spID == dbinfo[i].SpID) {
                        
                    spotelement.isOpen = dbinfo[i].isOpen == 1 ? true : false;
                    
                    var spotcontent = spotelement.isOpen ? 
                    "<p>Spot "+spotelement.spID+" is open.</p>":
                    "<p>This spot is currently taken.</p>";
                    if(cookiesEnabled && loginExists) {
                        if(userpark != null && userpark[0].isParked == 1 &&
                            spotelement.lotLetter == userpark[0].LotLetter &&
                            spotelement.spID == userpark[0].SpID) {
                            
                            spotcontent = "<p>You are currently parked here.</p><br><button type='submit' name='unparksubmission' value='" + spotelement.lotLetter + "," + spotelement.spID +"'>Unpark</button>";
                        } else if(userpark == null || userpark[0].isParked == 0) {
                            spotcontent+= spotelement.isOpen ? "<br><button type='submit' name='spotsubmission' value='"+ spotelement.lotLetter + "," + spotelement.spID +"'>Park</button>" : "";
                        }
                    }
                    spotelement.content = spotcontent;

                    dbinfo.splice(i,1);
                    foundSpot = true;
                }
            }
        }
    }
}