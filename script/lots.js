
/**
 * Creates an object that contains information on each invidual lot
 */
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

/**
 * Creates a lot pop up after a click
 * 
 * @param {L.polygon} e Target of click
 * @param {L.map} map Map of target
 * @param {LotsInfo} info Information of clicked lot
 */
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

        var lotlegend = L.control({position:"topleft"});
        lotlegend.onAdd = function(map) {
            var div = L.DomUtil.create('div','leaflet-control-layers leaflet-control-layers-expanded leaflet-control');
            L.DomUtil.setOpacity(div,.8);
            
            div.innerHTML += "<p style='text-align: center;'>&#9670; Lot Legend &#9670;</p><hr>";
            div.innerHTML += "<p style='color:#00FF00; text-align: center;'>&#9670; Low Activity</p><p style='color: #DDDD00; text-align: center;'>&#9670; Medium Activity</p><p style='color: #FF0000; text-align: center;'>&#9670; High Activty</p><p style='text-align: center;'>&#9670; No Data</p>";
            div.innerHTML += "<p style='text-align: center;'>&#9711; Spot Open</p><p style='text-align: center;'>&#x2B24; Spot Closed</p>";
            div.innerHTML += "<hr><p style='text-align: center;'>Please select a spot.</p>";

            return div;
        }

        //this requires lot infomrations
        sMap = L.map('sMap', {
            crs: L.CRS.Simple,
            maxBounds: info.latLngBound,
            center: info.centerPoint,
            minZoom: 0,
            maxZoom: 7,
            zoomControl: false
        });
        var image = L.imageOverlay(info.imageName,info.bounds).addTo(sMap);
        lotlegend.addTo(sMap);
        
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
var constructionzoneCord = [[37.13749085177789, -80.54825374095843],[37.13799291507276, -80.54911427873061], [37.138499, -80.548788], [37.1390414110868, -80.54832151975955],
                            [37.13845612229541, -80.54741615298012]];

var lotACord = [[37.13961129688688, -80.54950824048274],[37.13972236516366, -80.54941097314105],[37.13934724712133, -80.54884051332627],[37.13910204050474, -80.5483863123299],[37.13846951590547, -80.54888758429693],
                [37.13851866496543, -80.54952824739078],[37.13856995090699, -80.54954701158182],[37.13874517761167, -80.54966495792544],[37.13914050466194, -80.54929503530222],
                [37.13919392707787, -80.54894655746875],[37.139404000281814, -80.5491772723012]];
var lotBCord = [[37.140414,-80.550771],[37.140282,-80.550449],[37.140106,-80.550535],[37.140282,-80.550926]];
var lotCCord = [[37.140637,-80.550690],[37.140483,-80.550331],[37.140380,-80.550385],[37.140530,-80.550728]];
var lotECord = [[37.142018,-80.547976],[37.141885,-80.547772],[37.141629,-80.547869],[37.141073,-80.546806], [37.140641,-80.547386], [37.141620,-80.549558], [37.141783,-80.549430],
                [37.141334,-80.548582]];
var lotFCord = [[37.139876,-80.552874], [37.139901,-80.552461], [37.139448,-80.552418], [37.139392,-80.552825]];
var lotGCord = [[37.139204,-80.552997], [37.139238,-80.552825], [37.138486,-80.552718], [37.138473,-80.552922]];
var lotHCord = [[37.13814, -80.55292],[37.13814, -80.55285],[37.13820, -80.55286],[37.13820,-80.55277],[37.13772,-80.55276],[37.13763,-80.55273],[37.13750,-80.55286],[37.13807,-80.55292]]; 
var lotICord = [[37.135127,-80.550804],[37.135165,-80.550536],[37.134875,-80.550497],[37.134853,-80.550781]];
var lotJCord = [[37.134132,-80.551361], [37.133816,-80.550685],[37.133837,-80.549918],[37.133632,-80.549961],[37.133598,-80.550744],[37.133970,-80.551441]];
var lotKCord = [[37.136761,-80.554761],[37.136784,-80.554558],[37.136703,-80.554542],[37.136687,-80.554756]];
var lotLCord = [[37.138443,-80.545803], [37.138353,-80.545573], [37.137951,-80.545895], [37.138097,-80.546141]]; //contractor lot
var lotMCord = [[37.135024,-80.550058],[37.134506,-80.549120],[37.134241,-80.549343],[37.134746,-80.550271]]; 
var lotNCord = [[37.135756,-80.548459], [37.135558,-80.548082], [37.134892,-80.548630], [37.135106,-80.549006]];
var lotPCord = [[37.137626,-80.554848],[37.137655,-80.554555],[37.13758,-80.55453],[37.137557,-80.55483]];
var lotRCord = [[37.135449,-80.547869],[37.135308,-80.547616],[37.135013,-80.547858],[37.135176,-80.548131]];
var lotSCord = [[37.136959,-80.546485],[37.136737,-80.546109],[37.136442,-80.546388],[37.136660,-80.546737]];
var lotUCord = [[37.142095,-80.547407],[37.141295,-80.545755],[37.141064,-80.545954],[37.141295,-80.546479], [37.141261,-80.546774], [37.141710,-80.547675]];
var lotXCord = [[37.13937739683171, -80.54811880731638],[37.13913681937806, -80.54765606382968],[37.13928829415972, -80.54755770289587],[37.13915107584104, -80.54729391675521],
                [37.139151902584736, -80.54710393323009],[37.139126953773015, -80.5470480463359],[37.13891667060476, -80.54728053581579],[37.139009337835695, -80.54742584174073],
                [37.139080620243796, -80.54778575333943],[37.13910556907075, -80.54790870450668],[37.13924813363842, -80.54817696159887]];
var lotYCord = [[37.137666401209586, -80.5458672421914],[37.13739756065853, -80.545364369509],[37.13715490106096, -80.5455224651905],[37.137452111933776, -80.54604984406832]];
var lotZCord = [[37.140386,-80.541844],[37.138624,-80.538851],[37.138307,-80.539151],[37.140069,-80.542091]];

var lotAACord = [[37.136582,-80.547760],[37.136405,-80.547363],[37.136059,-80.547642],[37.136264,-80.548050]];
var lotBBCord = [[37.139602124431704, -80.54860192665475],[37.13970513522526, -80.54850605285112],
                [37.139661937167624, -80.54840601062122],[37.13979485418923, -80.54822885250579], [37.139701812298625, -80.54806836809534],
                [37.13964053838535, -80.54781936891087], [37.13958382195081, -80.54779286297168],[37.139521545032544, -80.54778309762565],[37.13950708788347, -80.54776217188419],[37.139450371348886, -80.54764498773193],
                [37.1394058877626, -80.54754035902458],[37.13925909174226, -80.54764219763307],[37.13945815597382, -80.54804676196818]];
var lotBFCord = [[37.136674227648896, -80.53937855514945],[37.13648032272921, -80.5393064861521],[37.13648032272921, -80.5390542446613],
                [37.13634746166399, -80.53900920153794],[37.13588783239551, -80.53941909396048],
                [37.1361894644179, -80.53995961144074],[37.13666345516638, -80.53955422333054]]
var lotBLCord = [[37.134309754508145, -80.5421727551207],[37.13343480413906, -80.54003916948761],[37.13331243265261, -80.54015045362989],[37.134162910391595, -80.54224566541198]]
var lotCCCord = [[37.140265,-80.546479],[37.140547,-80.546072],[37.140637,-80.545605],[37.140620,-80.545160],[37.140517,-80.544800],[37.140355,-80.544468],[37.139461,-80.545197], 
                [37.139444,-80.545535], [37.139944,-80.546409]];
var lotDCCord = [[37.13776609276324, -80.54164357176188],[37.13727852785799, -80.54085028361665], [37.13676670538254, -80.54132246942422],[37.1372078541074, -80.54214688766308]]; 
var lotDDCord = [[37.136912,-80.552659],[37.137057,-80.550991],[37.136882,-80.550959],[37.136754,-80.552654]];
var lotEECord = [[37.136886,-80.550234],[37.136360,-80.549156],[37.136219,-80.549253],[37.136792,-80.550326]];
var lotFFCord = [[37.142695,-80.545996],[37.142507,-80.545449],[37.142344,-80.545546],[37.142113,-80.545202], [37.141754,-80.545567], [37.142259,-80.546597]];
var lotGACord = [[37.139811,-80.555282], [37.139824,-80.555186], [37.139585,-80.555164], [37.139580,-80.555272]];
var lotGGCord = [[37.141073,-80.552139], [37.140962,-80.551693], [37.140727,-80.551854], [37.140876,-80.552241]];
var lotHFCord = [[37.135612182881644, -80.53851099140569],[37.13538260096308, -80.53812983913772],[37.13532182916214, -80.53818065944012],[37.1355063952214, -80.538666275663],
                [37.13552665244438, -80.53855898835795]]
var lotHHCord = [[37.135071,-80.549324], [37.134840,-80.548857], [37.134506,-80.549120], [37.134780,-80.549576]];
var lotIMCord = [[37.1349022285553, -80.54013431435747], [37.13457710874972, -80.53930997549377],[37.133603839874574, -80.53992560614421],[37.1336623270396, -80.54008777699325],
                [37.13449037731482, -80.53953948507511],[37.13475257743259, -80.54021291349194]];
var lotJJCord = [[37.136197,-80.548109], [37.136013,-80.547781], [37.135684,-80.548028], [37.135889,-80.548377]];
var lotSLCord = [[37.13890112369542, -80.54268534668074],[37.1387771616319, -80.54288658420695],[37.138819089999636, -80.54292545963816],[37.13880268324981, -80.54297805580978],
                [37.13864590746092, -80.54310382926366],[37.13853835178993, -80.54290945210766],[37.138576634334406, -80.5428522823559],
                [37.13849095432705, -80.5426716259403],[37.138596687088075, -80.54270821458144],[37.13858028029001, -80.54274022964243],[37.138636792579476, -80.54282255408496],
                [37.13873341026688, -80.5428271276651],[37.13881362108342, -80.5427036410013]]
var lotUCCCord = [[37.13766243169457, -80.55387244835696],[37.137689249069595, -80.55360753334863],[37.13682618122259, -80.55353742315125],[37.136818961468286, -80.55374873995855]];
var lotPSCord = [[37.13450278501684, -80.53913475209539],[37.13420882642322, -80.53841424791023],[37.134149696683096, -80.53844179659964],[37.13413111304094, -80.53853291918777],
                [37.134104082280565, -80.53861556525608],
                [37.13412942361871, -80.53872787914376],[37.13429836565603, -80.53917077730465],[37.13433553285362, -80.53921739816369],[37.13437101061609, -80.53922163642359]];
var lotUDCord = [[37.13931398519263, -80.54259022212166],[37.13877106202054, -80.54267823248942],[37.138289967415126, -80.54248511344349],[37.137663405400346, -80.54138154746124],
                [37.137629193828566, -80.54081023695034],[37.13842261413862, -80.53993534998017],[37.13954823430139, -80.54205953158275]];


//univ apartment coords
var clement1117 = [[37.137575,-80.555230], [37.137160,-80.555187], [37.137148,-80.555316], [37.137575,-80.555364]];
var clement1023 = [[37.137347,-80.554824],[37.137362,-80.554664],[37.137231,-80.5545648],[37.13725,-80.554325],[37.137123,-80.554304],[37.137092,-80.55459],[37.136969,-80.554578],[37.136961,-80.554778]];
var clement1019 = [[37.13771,-80.553929],[37.13772,-80.553779],[37.137287,-80.55373],[37.137287,-80.553867]];
var fairfax1028 = [[37.137154,-80.554189],[37.137177,-80.554019],[37.136763, -80.553969],[37.13677,-80.554145]];
var howe600 =     [[37.133229,-80.549025],[37.132895,-80.548338],[37.132613,-80.548585],[37.132980,-80.549185]];
var howe621 =     [[37.133348,-80.549306],[37.133275,-80.549081],[37.133171,-80.549204],[37.13322,-80.549391]];
var calhoun527 = [[37.132818,-80.548059],[37.132655,-80.547770],[37.132553,-80.547813],[37.132741,-80.548134]];
var calhoun525 = [[37.133117,-80.547813],[37.132972,-80.547512],[37.132878,-80.547566],[37.133049,-80.547856]];
var calhoun512 = [[37.133323,-80.547705],[37.132963,-80.547094],[37.132886,-80.547116],[37.133246,-80.547759]];
var calhoun602 = [[37.133682,-80.548360],[37.133605,-80.548199],[37.133511,-80.548263],[37.133690,-80.548574]];
var calhoun604 = [[37.133981,-80.548285],[37.133682,-80.547727],[37.133545,-80.547845],[37.133793,-80.548381]];
var davis521 =   [[37.133716,-80.546987],[37.133511,-80.546590],[37.133417,-80.546697],[37.133682,-80.547159]];
var fairfax517 = [[37.134323,-80.545957],[37.134221,-80.545754],[37.133956,-80.545968],[37.134050,-80.546183]];
var fairfax515 = [[37.133998,-80.545357],[37.133896,-80.545217],[37.133802,-80.545282],[37.133887,-80.545453]];
var fairfax404 = [[37.133938,-80.543984],[37.133648,-80.543534],[37.133280,-80.543770],[37.133571,-80.544295]];
var madison303 = [[37.135401,-80.545925],[37.135273,-80.545711],[37.135076,-80.545893],[37.135187,-80.546097]];

/**
 * Shows the entirety of the lots on the map
 * 
 * @param {L.map} map The map that hosts the lots
 */
function showLots(map) {
     //auxiliary lots, not as important
    var contractor = L.polygon(lotLCord, {color: 'green'}).addTo(map);
    contractor.bindTooltip("Contractor Lot",{permanent: true});
    var constructionzone = L.polygon(constructionzoneCord, {color: 'orange', fillColor: 'black', fillOpacity: 1.0}).addTo(map);
    constructionzone.bindTooltip("Under Construction",{permanent: true});

    constructionzone.bindPopup("CONSTRUCTION ZONE");
    contractor.bindPopup("CONTRACTOR LOT");

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //Parkinglots
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //Single letter lots
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    var lotA = L.polygon(lotACord,{fillColor: lotcolors.A});
    lotA.bindTooltip("Lot A", {permanent: true}); 
    
    var lotB = L.polygon(lotBCord,{fillColor: lotcolors.B});
    lotB.bindTooltip("Lot B", {permanent: true});  
    
    var lotC = L.polygon(lotCCord,{fillColor: lotcolors.C});
    lotC.bindTooltip("Lot C", {permanent: true}); 
    
    var lotE = L.polygon(lotECord,{fillColor: lotcolors.E});
    lotE.bindTooltip("Lot E", {permanent: true}); 
    
    var lotF = L.polygon(lotFCord,{fillColor: lotcolors.F});
    lotF.bindTooltip("Lot F", {permanent: true}); 
    
    var lotG = L.polygon(lotGCord,{fillColor: lotcolors.G});
    lotG.bindTooltip("Lot G", {permanent: true}); 
    
    var lotH = L.polygon(lotHCord,{fillColor: lotcolors.H}); 
    lotH.bindTooltip("Lot H", {permanent: true}); 
    
    var lotI = L.polygon(lotICord,{fillColor: lotcolors.I});
    lotI.bindTooltip("Lot I", {permanent: true}); 
    
    var lotJ = L.polygon(lotJCord,{fillColor: lotcolors.J});
    lotJ.bindTooltip("Lot J", {permanent: true}); 
    
    var lotK = L.polygon(lotKCord,{fillColor: lotcolors.K});
    lotK.bindTooltip("Lot K", {permanent: true}); 
    
    var lotM = L.polygon(lotMCord,{fillColor: lotcolors.M});
    lotM.bindTooltip("Lot M", {permanent: true}); 

    var lotN = L.polygon(lotNCord,{fillColor: lotcolors.N});
    lotN.bindTooltip("Lot N", {permanent: true}); 

    var lotP = L.polygon(lotPCord,{fillColor: lotcolors.P});
    lotP.bindTooltip("Lot P", {permanent: true}); 

    var lotR = L.polygon(lotRCord,{fillColor: lotcolors.R});
    lotR.bindTooltip("Lot R", {permanent: true}); 

    var lotS = L.polygon(lotSCord,{fillColor: lotcolors.S});
    lotS.bindTooltip("Lot S", {permanent: true}); 

    var lotU = L.polygon(lotUCord,{fillColor: lotcolors.U});
    lotU.bindTooltip("Lot U", {permanent: true}); 

    var lotX = L.polygon(lotXCord,{fillColor: lotcolors.X});
    lotX.bindTooltip("Lot X", {permanent: true}); 

    var lotY = L.polygon(lotYCord,{fillColor: lotcolors.Y});
    lotY.bindTooltip("Lot Y", {permanent: true}); 


    //has no pass restriction
    var lotZ = L.polygon(lotZCord,{fillColor: lotcolors.Z});
    lotZ.bindTooltip("Lot Z", {permanent: true}); 

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //double / triple letter lots
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    var lotAA = L.polygon(lotAACord,{fillColor: lotcolors.AA});
    lotAA.bindTooltip("Lot AA", {permanent: true}); 

    var lotBB = L.polygon(lotBBCord,{fillColor: lotcolors.BB}); 
    lotBB.bindTooltip("Lot BB", {permanent: true}); 

    var lotBF = L.polygon(lotBFCord,{fillColor: lotcolors.BF}); 
    lotBF.bindTooltip("Lot BF", {permanent: true}); 

    var lotBL = L.polygon(lotBLCord,{fillColor: lotcolors.BL}); 
    lotBL.bindTooltip("Lot BL", {permanent: true}); 
    
    var lotCC = L.polygon(lotCCCord,{fillColor: lotcolors.CC});
    lotCC.bindTooltip("Lot CC", {permanent: true}); 
    
    var lotDC = L.polygon(lotDCCord,{fillColor: lotcolors.DC});
    lotDC.bindTooltip("Lot DC", {permanent: true}); 
    
    var lotDD = L.polygon(lotDDCord,{fillColor: lotcolors.DD});
    lotDD.bindTooltip("Lot DD", {permanent: true}); 

    var lotEE = L.polygon(lotEECord,{fillColor: lotcolors.EE});
    lotEE.bindTooltip("Lot EE", {permanent: true}); 

    var lotFF = L.polygon(lotFFCord,{fillColor: lotcolors.FF});
    lotFF.bindTooltip("Lot FF", {permanent: true}); 
    
    var lotGA = L.polygon(lotGACord,{fillColor: lotcolors.GA}); //Grove avenue
    lotGA.bindTooltip("Lot GA", {permanent: true}); 
    
    var lotGG = L.polygon(lotGGCord,{fillColor: lotcolors.GG}); //Hemphill & muse halls
    lotGG.bindTooltip("Lot GG", {permanent: true}); 

    var lotHF = L.polygon(lotHFCord,{fillColor: lotcolors.HF}); 
    lotHF.bindTooltip("Lot HF", {permanent: true}); 

    var lotHH = L.polygon(lotHHCord,{fillColor: lotcolors.HH}); //Accross from Waldron
    lotHH.bindTooltip("Lot HH", {permanent: true}); 
    
    var lotIM = L.polygon(lotIMCord,{fillColor: lotcolors.IM}); //(IM fields; has 2 sections)
    lotIM.bindTooltip("Lot IM", {permanent: true}); 
    
    var lotJJ = L.polygon(lotJJCord,{fillColor: lotcolors.JJ});
    lotJJ.bindTooltip("Lot JJ", {permanent: true}); 

    var lotSL = L.polygon(lotSLCord,{fillColor: lotcolors.SL});// (stadium lot)
    lotSL.bindTooltip("Lot SL", {permanent: true}); 
    
    var lotPS = L.polygon(lotPSCord,{fillColor: lotcolors.PS});// PS (printing shop)
    lotPS.bindTooltip("Lot PS", {permanent: true}); 
    
    var lotUCC = L.polygon(lotUCCCord,{fillColor: lotcolors.UCC});// (stadium lot)
    lotUCC.bindTooltip("Lot UCC", {permanent: true}); 
    
    var lotUD = L.polygon(lotUDCord,{fillColor: lotcolors.UD});// (stadium Drive)
    lotUD.bindTooltip("Lot UD", {permanent: true}); 


    //Apartment Parking
    var lot1117 = L.polygon(clement1117, {color: 'purple'});
    var lot1023 = L.polygon(clement1023, {color: 'purple'});
    var lot1019 = L.polygon(clement1019, {color: 'purple'});
    var lot1028 = L.polygon(fairfax1028, {color: 'purple'});
    var lot600 = L.polygon(howe600, {color: 'purple'});
    var lot621 = L.polygon(howe621, {color: 'purple'});
    var lot527 = L.polygon(calhoun527, {color: 'purple'});
    var lot525 = L.polygon(calhoun525, {color: 'purple'});
    var lot512 = L.polygon(calhoun512, {color: 'purple'});
    var lot602 = L.polygon(calhoun602, {color: 'purple'});
    var lot604 = L.polygon(calhoun604, {color: 'purple'});
    var lot521 = L.polygon(davis521, {color: 'purple'});
    var lot515 = L.polygon(fairfax515, {color: 'purple'});
    var lot517 = L.polygon(fairfax517, {color: 'purple'});
    var lot404 = L.polygon(fairfax404, {color: 'purple'});
    var lot303 = L.polygon(madison303, {color: 'purple'});

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //Lot Info
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    var LotAInfo = new LotsInfo([[0,0],[179.4,218.9]],'Lot-A.png',...lotASpots);
    var LotBInfo = new LotsInfo([[0,0],[225.1,126.4]],'Lot-B.png',...lotBSpots);
    var LotCInfo = new LotsInfo([[0,0],[186.8,105.0]],'Lot-C.png',...lotCSpots);
    var LotEInfo = new LotsInfo([[0,0],[328.8,537.1]],'Lot-E.png',...lotESpots);
    var LotFInfo = new LotsInfo([[0,0],[157.1,163.3]],'Lot-F.png',...lotFSpots);
    var LotGInfo = new LotsInfo([[0,0],[102.9,229.0]],'Lot-G.png',...lotGSpots);
    var LotHInfo = new LotsInfo([[0,0],[183.4,53.5]],'Lot-H.png',...lotHSpots);
    var LotIInfo = new LotsInfo([[0,0],[242.8,141.8]],'Lot-I.png',...lotISpots);
    var LotJInfo = new LotsInfo([[0,0],[117.9,243.9]],'Lot-J.png',...lotJSpots);
    var LotKInfo = new LotsInfo([[0,0],[102.9,186.4]],'Lot-K.png',...lotKSpots);
    var LotMInfo = new LotsInfo([[0,0],[139.9,261.1]],'Lot-M.png',...lotMSpots);
    var LotNInfo = new LotsInfo([[0,0],[385.0,188.8]],'Lot-N.png',...lotNSpots);
    var LotPInfo = new LotsInfo([[0,0],[102.9,220.0]],'Lot-P.png',...lotPSpots);
    var LotRInfo = new LotsInfo([[0,0],[200.3, 253.1]],'Lot-R.png',...lotRSpots);
    var LotSInfo = new LotsInfo([[0,0],[229.3,222.7]],'Lot-S.png',...lotSSpots);
    var LotUInfo = new LotsInfo([[0,0],[148.2,361.6]],'Lot-U.png',...lotUSpots);
    var LotXInfo = new LotsInfo([[0,0],[65.1,112.7]],'Lot-X.png',...lotXSpots);
    var LotYInfo = new LotsInfo([[0,0],[226.7,183.0]],'Lot-Y.png',...lotYSpots);
    var LotZInfo = new LotsInfo([[0,0],[91.1,432.0]],'Lot-Z.png',...lotZSpots);
    var LotAAInfo = new LotsInfo([[0,0],[203.5,245.6]],'Lot-AA.png',...lotAASpots);
    var LotBBInfo = new LotsInfo([[0,0],[156.0,304.4]],'Lot-BB.png',...lotBBSpots);
    var LotBFInfo = new LotsInfo([[0,0],[222.5,188.0]],'Lot-BF.png',...lotBFSpots);
    var LotBLInfo = new LotsInfo([[0,0],[48.8,289.7]],'Lot-BL.png',...lotBLSpots);
    var LotCCInfo = new LotsInfo([[0,0],[285.8,379.8]],'Lot-CC.png', ...lotCCSpots);
    var LotDCInfo = new LotsInfo([[0,0],[206.2,285.4]],'Lot-DC.png',...lotDCSpots);
    var LotDDInfo = new LotsInfo([[0,0],[92.5,417.4]],'Lot-DD.png',...lotDDSpots);
    var LotEEInfo = new LotsInfo([[0,0],[116.4,358.1]],'Lot-EE.png',...lotEESpots);
    var LotFFInfo = new LotsInfo([[0,0],[167.9,221.2]],'Lot-FF.png',...lotFFSpots);
    var LotGAInfo = new LotsInfo([[0,0],[36.7,189.8]],'Lot-GA.png',...lotGASpots);
    var LotGGInfo = new LotsInfo([[0,0],[177.3,160.9]],'Lot-GG.png',...lotGGSpots);
    var LotHFInfo = new LotsInfo([[0,0],[109.3,304.0]],'Lot-HF.png',...lotHFSpots);
    var LotHHInfo = new LotsInfo([[0,0],[189.9,240.4]],'Lot-HH.png',...lotHHSpots);
    var LotIMInfo = new LotsInfo([[0,0],[282.2,263.9]],'Lot-IM.png',...lotIMSpots);
    var LotJJInfo = new LotsInfo([[0,0],[136.9,150.7]],'Lot-JJ.png',...lotJJSpots);
    var LotSLInfo = new LotsInfo([[0,0],[198.5,207.8]],'Lot-SL.png',...lotSLSpots);
    var LotUDInfo = new LotsInfo([[0,0],[197.3,266.9]],'Lot-UD.png',...lotUDSpots);
    var LotPSInfo = new LotsInfo([[0,0],[106.1,25.5]],'Lot-PS.png',...lotPSSpots);
    var LotUCCInfo = new LotsInfo([[0,0],[100.4,281.3]],'Lot-UCC.png',...lotUCCSpots);
    
    //All lot infomration is put into an array for iterability
    var allLotsInfo = [LotAInfo,LotBInfo,LotCInfo,LotEInfo,LotFInfo,LotGInfo,LotHInfo,LotIInfo,LotJInfo,
                       LotKInfo,LotMInfo,LotNInfo,LotPInfo,LotRInfo,LotSInfo,LotUInfo,LotXInfo,
                       LotYInfo,LotZInfo,LotAAInfo,LotBBInfo,LotBFInfo,LotBLInfo,LotCCInfo,LotDCInfo,
                       LotDDInfo,LotEEInfo,LotFFInfo,LotGAInfo,LotGGInfo,LotHFInfo,LotHHInfo,LotIMInfo,LotJJInfo,
                       LotSLInfo,LotUDInfo,LotPSInfo,LotUCCInfo];

    
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //Lot feature groups (allows us to select lots based upon passes)
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    var allLots = L.featureGroup([lotA, lotB, lotC, lotE, lotF, lotG,lotH,lotI,lotJ,lotK,
    lotM,lotN,lotP,lotR,lotS,lotU,lotX,lotY,lotZ,lotAA,lotBB,lotBF,lotBL,lotCC,lotDC,
    lotDD,lotEE,lotFF,lotGA,lotGG,lotHF,lotHH,lotIM,lotJJ,lotSL,lotUD,lotPS,lotUCC]);

    var facultyLots = L.featureGroup([lotA,lotB,lotC,lotE,lotF,lotG,lotJ,lotK,lotM,lotN,lotP,lotR,lotS,lotU,
        lotY,lotAA,lotBB,lotBL,lotDC,lotDD,lotEE,lotGA,lotGG,lotHF,lotHH,lotIM,lotJJ,lotSL,lotUD,lotPS,lotUCC]);
    var residentLots = L.featureGroup([lotU,lotBF,lotCC,lotFF]);
    var commuterLots = L.featureGroup([lotE,lotK,lotM,lotP,lotU,lotY,lotBL,lotDC,lotIM]);
    var univApts = L.featureGroup ([lot1117,lot1023,lot1019,lot1028,lot600,lot621,lot527,
                                    lot525,lot512,lot602,lot604,lot521,lot515,lot517,lot404,lot303]); 
   
    var radioLot = RadioOrdering(pass); 
    /**
     * Orders the radio buttons according to pass, the selected pass maintains priority
     * 
     * @param {string} passid Pass to determine radio ordering
     * @returns The radio order according to pass, with the selected pass maintaining priority
     */
    function RadioOrdering (passid){
        var radioOrder = null; 
        if (passid == "red") {
            radioOrder = {
            "Faculty" : facultyLots,    
            "All": allLots,
            "Commuter" : commuterLots,
            "Univ-Apts" : univApts,
            "Resident" : residentLots
            }
        }  else if (passid == "yellow") {
            radioOrder = {
                "Commuter" : commuterLots,  
                "All": allLots,
                "Faculty" : facultyLots, 
                "Univ-Apts" : univApts,
                "Resident" : residentLots
                
            }

        } else if (passid == "black") {
            radioOrder = {
                "All": allLots,
                "Commuter" : commuterLots,
                "Faculty" : facultyLots,
                "Univ-Apts" : univApts,    
                "Resident" : residentLots
            }
 
        } else if (pass == "blue") { 
            radioOrder = {
                "Resident" : residentLots,
                "All": allLots,
                "Commuter" : commuterLots,
                "Univ-Apts" : univApts,
                "Faculty" : facultyLots  
                }
        } else if (pass == "purple") {
            radioOrder = {
                "Resident" : residentLots,
                "All": allLots,
                "Commuter" : commuterLots,
                "Univ-Apts" : univApts,
                "Faculty" : facultyLots  
                }
        }
        return radioOrder; 
    }

    /**
     * Creates the styling for the specific lot "layers." Based on lot pass
     * 
     * @param {L.featureGroup} lot The lot to determine the style
     * @returns The lot "layer" style for a given lot pass
     */
    function lotStyler (lot) {
        var lotStyle = null; 
        if (lot == allLots) {
            var lotStyle = {
                color: 'white', 
                linecap: 'round', 
                fillOpacity: 0.9
            };
        } else if (lot == facultyLots ){
            var lotStyle = {
                color: 'red', 
                linecap: 'round', 
                fillOpacity: 0.8
            }; 
        } else if (lot == residentLots){ 
            var lotStyle = {
                color: 'blue', 
                linecap: 'round', 
                fillOpacity: 0.8
            };
        } else if (lot == commuterLots){
            var lotStyle = {
                color: 'gold', 
                linecap: 'round', 
                fillOpacity: 0.8
            };
        } 

        return lotStyle; 

    }

    //topright selectors
    var layerControl = L.control.layers(radioLot, null, {collapsed: false, position: 'topright'}).addTo(map);

    //Defaults the lot style based on the pass
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

    //Specifically changes lot "layers" once selector is used
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
    });

    //use methods for initializing lots and events
    initLots(dbinfo,spotcolors,allLotsInfo);
    initLotEvents(map);


    /**
     * Initializes the lot event listeners
     * 
     * @param {L.map} map The map in which the lots belong (for listening)
     */
    function initLotEvents(map) {
        
        lotA.on("click", function(e) {
         lotpopup(e,map,LotAInfo);
        });
        
        lotB.on("click", function(e) {
            lotpopup(e,map,LotBInfo);
        });

        lotC.on("click", function(e) {
            lotpopup(e,map,LotCInfo);
        });

        lotE.on("click", function(e) {
            lotpopup(e,map,LotEInfo);
        });        

        lotF.on("click", function(e) {
            lotpopup(e,map,LotFInfo);
        });

        lotG.on("click", function(e) {
            lotpopup(e,map,LotGInfo);
        });

        lotH.on("click", function(e) {
            lotpopup(e,map,LotHInfo);
        });

        lotI.on("click", function(e) {
            lotpopup(e,map,LotIInfo);
        });

        lotJ.on("click", function(e) {
            lotpopup(e,map,LotJInfo);
        });

        lotK.on("click", function(e) {
            lotpopup(e,map,LotKInfo);
        });

        lotM.on("click", function(e) {
            lotpopup(e,map,LotMInfo);
        });

        lotN.on("click", function(e) {
            lotpopup(e,map,LotNInfo);
        });

        lotP.on("click", function(e) {
            lotpopup(e,map,LotPInfo);
        });

        lotR.on("click", function(e) {
            lotpopup(e,map,LotRInfo);
        });

        lotS.on("click", function(e) {
            lotpopup(e,map,LotSInfo);
        });

        lotU.on("click", function(e) {
            lotpopup(e,map,LotUInfo);
        });

        lotX.on("click", function(e) {
            lotpopup(e,map,LotXInfo);
        });

        lotY.on("click", function(e) {
            lotpopup(e,map,LotYInfo);
        });

        lotZ.on("click", function(e) {
            lotpopup(e,map,LotZInfo);
        });

        lotAA.on("click", function(e) {
            lotpopup(e,map,LotAAInfo);
        });

        lotBB.on("click", function(e) {
         lotpopup(e,map,LotBBInfo);
        });

        lotBF.on("click", function(e) { 
            lotpopup(e,map,LotBFInfo);
        });

        lotBL.on("click", function(e) {
            lotpopup(e,map,LotBLInfo);
        });

        lotCC.on("click", function(e) {
            lotpopup(e,map,LotCCInfo);
        });

        lotDC.on("click", function(e) {
            lotpopup(e,map,LotDCInfo);
        });

        lotDD.on("click", function(e) {
            lotpopup(e,map,LotDDInfo);
        });

        lotEE.on("click", function(e) {
            lotpopup(e,map,LotEEInfo);
        });

        lotFF.on("click", function(e) {
            lotpopup(e,map,LotFFInfo);
        });

        lotGA.on("click", function(e) {
            lotpopup(e,map,LotGAInfo);            
        });

        lotGG.on("click", function(e) {
            lotpopup(e,map,LotGGInfo);
        });

        lotHF.on("click", function(e) { 
            lotpopup(e,map,LotHFInfo);
        });

        lotHH.on("click", function(e) {
            lotpopup(e,map,LotHHInfo);
        });

        lotIM.on("click", function(e) {
            lotpopup(e,map,LotIMInfo);
        });

        lotJJ.on("click", function(e) {
            lotpopup(e,map,LotJJInfo);
        });

        lotSL.on("click", function(e) {
            lotpopup(e,map,LotSLInfo);
        });

        lotUD.on("click", function(e) {
            lotpopup(e,map,LotUDInfo);
        });

        lotPS.on("click", function(e) {
            lotpopup(e,map,LotPSInfo);
        });

        lotUCC.on("click", function(e) {
            lotpopup(e,map,LotUCCInfo);
        });
    }
}

/**
 *  Initializing whether a spot is open for each lot. Responsible for heatmap operation for spots.
 * 
 * @param {array} dbinfo Database info on spots
 * @param {array} heatmapspotcolors Heatmap color info on spots
 * @param {array} lots Lots info that contain spots
 */
function initLots(dbinfo, heatmapspotcolors, lots) {
    for(let lotelement of lots) {
        for(let spotelement of lotelement.spots) {
            var foundSpot = false;
            for(let i = 0; i < dbinfo.length && !foundSpot; i++) {

                //spot occupancy
                if(spotelement.lotLetter == dbinfo[i].LotLetter &&
                    spotelement.spID == dbinfo[i].SpID) {
                        
                    spotelement.isOpen = dbinfo[i].isOpen == 1 ? true : false;
                    
                    var spotcontent = spotelement.isOpen ? 
                    "<p>Spot "+spotelement.spID+" is open.</p>":
                    "<p>This spot is currently taken.</p>";
                    var spotopacity = spotelement.isOpen ? 0.0 : 1.0;

                    if(cookiesEnabled && loginExists) {
                        if(userpark != null && userpark[0].isParked == 1 &&
                            spotelement.lotLetter == userpark[0].LotLetter &&
                            spotelement.spID == userpark[0].SpID) {
                            
                            spotcontent = "<div align='center'><p>You are currently parked here.</p><br><button type='submit' name='unparksubmission' value='" + spotelement.lotLetter + "," + spotelement.spID +"'>Unpark</button></div>";
                        } else if(userpark == null || userpark[0].isParked == 0) {
                            spotcontent+= spotelement.isOpen ? "<br><div align='center'><button type='submit' name='spotsubmission' value='"+ spotelement.lotLetter + "," + spotelement.spID +"'>Park</button></div>" : "";
                        }
                    }
                    spotelement.content = spotcontent;
                    spotelement.changeOpacity(spotopacity);

                    // changing the colors based on amount of times parked
                    if(heatmapspotcolors != null) {
                        var spotColorSet = false;
                        for(let j = 0; j < heatmapspotcolors.length && !spotColorSet; j++) {
                            if(heatmapspotcolors[j].LotLetter == spotelement.lotLetter &&
                                heatmapspotcolors[j].SpID == spotelement.spID) {
                                    spotelement.changeColor(heatmapspotcolors[j].Color);

                                    heatmapspotcolors.splice(j,1);
                                    spotColorSet = true;
                                }
                        }
                    }

                    dbinfo.splice(i,1);
                    foundSpot = true;
                }
            }
        }
    }
}