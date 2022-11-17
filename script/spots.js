class SpotsInfo {
    #lotLetter;
    #spID;
    #isOpen;
    #gridLocation;
    #display;
    #content;

    constructor(lotLetter, spID, isOpen, gridLocation) {
        this.#lotLetter = lotLetter;
        this.#spID = spID;
        this.#isOpen = isOpen;
        this.#gridLocation = gridLocation;
        this.#display = L.circle(this.#gridLocation, {radius: 5, color: 'black'});
        this.#content = "";
    }

    get lotLetter() {
        return this.#lotLetter;
    }
    get spID() {
        return this.#spID;
    }
    get isOpen() {
        return this.#isOpen;
    }
    get gridLocation() {
        return this.#gridLocation;
    }
    get display() {
        return this.#display;
    }
    get content() {
        return this.#content;
    }

    set isOpen(isOpen) {
        this.#isOpen = isOpen;
    }
    set content(content) {
        this.#content = content;
    }
}

//Lot A - - - - - - - - - - - - - - - - - - - - - - - - -
var A001 = new SpotsInfo('A','001',true,[0,0]);
var A002 = new SpotsInfo('A','002',true,[0,0]);
var A003 = new SpotsInfo('A','003',true,[0,0]);
var A004 = new SpotsInfo('A','004',true,[0,0]);
var A005 = new SpotsInfo('A','005',true,[0,0]);
var A006 = new SpotsInfo('A','006',true,[0,0]);
var A007 = new SpotsInfo('A','007',true,[0,0]);
var A008 = new SpotsInfo('A','008',true,[0,0]);
var A009 = new SpotsInfo('A','009',true,[0,0]);
var A00A = new SpotsInfo('A','00A',true,[0,0]);
var A00B = new SpotsInfo('A','00B',true,[0,0]);
var A00C = new SpotsInfo('A','00C',true,[0,0]);
var A00D = new SpotsInfo('A','00D',true,[0,0]);
var A00E = new SpotsInfo('A','00E',true,[0,0]);
var A00F = new SpotsInfo('A','00F',true,[0,0]);
var A010 = new SpotsInfo('A','010',true,[0,0]);
var A011 = new SpotsInfo('A','011',true,[0,0]);
var A012 = new SpotsInfo('A','012',true,[0,0]);
var A013 = new SpotsInfo('A','013',true,[0,0]);
var A014 = new SpotsInfo('A','014',true,[0,0]);
var A015 = new SpotsInfo('A','015',true,[0,0]);
var A016 = new SpotsInfo('A','016',true,[0,0]);
var A017 = new SpotsInfo('A','017',true,[0,0]);
var A018 = new SpotsInfo('A','018',true,[0,0]);
var A019 = new SpotsInfo('A','019',true,[0,0]);
var A01A = new SpotsInfo('A','01A',true,[0,0]);
var A01B = new SpotsInfo('A','01B',true,[0,0]);
var A01C = new SpotsInfo('A','01C',true,[0,0]);
var A01D = new SpotsInfo('A','01D',true,[0,0]);
var A01E = new SpotsInfo('A','01E',true,[0,0]);
var A01F = new SpotsInfo('A','01F',true,[0,0]);
var A020 = new SpotsInfo('A','020',true,[0,0]);
var A021 = new SpotsInfo('A','021',true,[0,0]);
var A022 = new SpotsInfo('A','022',true,[0,0]);
var A023 = new SpotsInfo('A','023',true,[0,0]);
var A024 = new SpotsInfo('A','024',true,[0,0]);
var A025 = new SpotsInfo('A','025',true,[0,0]);
var A026 = new SpotsInfo('A','026',true,[0,0]);
var A027 = new SpotsInfo('A','027',true,[0,0]);
var A028 = new SpotsInfo('A','028',true,[0,0]);
var A029 = new SpotsInfo('A','029',true,[0,0]);
var A02A = new SpotsInfo('A','02A',true,[0,0]);
var A02B = new SpotsInfo('A','02B',true,[0,0]);
var A02C = new SpotsInfo('A','02C',true,[0,0]);
var A02D = new SpotsInfo('A','02D',true,[0,0]);
var A02E = new SpotsInfo('A','02E',true,[0,0]);
var A02F = new SpotsInfo('A','02F',true,[0,0]);
var A030 = new SpotsInfo('A','030',true,[0,0]);
var A031 = new SpotsInfo('A','031',true,[0,0]);
var A032 = new SpotsInfo('A','032',true,[0,0]);
var A033 = new SpotsInfo('A','033',true,[0,0]);
var A034 = new SpotsInfo('A','034',true,[0,0]);
var A035 = new SpotsInfo('A','035',true,[0,0]);
var A036 = new SpotsInfo('A','036',true,[0,0]);
var A037 = new SpotsInfo('A','037',true,[0,0]);
var A038 = new SpotsInfo('A','038',true,[0,0]);
var A039 = new SpotsInfo('A','039',true,[0,0]);
var A03A = new SpotsInfo('A','03A',true,[0,0]);
var A03B = new SpotsInfo('A','03B',true,[0,0]);
var A03C = new SpotsInfo('A','03C',true,[0,0]);
var A03D = new SpotsInfo('A','03D',true,[0,0]);
var A03E = new SpotsInfo('A','03E',true,[0,0]);
var A03F = new SpotsInfo('A','03F',true,[0,0]);
var A040 = new SpotsInfo('A','040',true,[0,0]);
var A041 = new SpotsInfo('A','041',true,[0,0]);
var A042 = new SpotsInfo('A','042',true,[0,0]);
var A043 = new SpotsInfo('A','043',true,[0,0]);
var A044 = new SpotsInfo('A','044',true,[0,0]);
var A045 = new SpotsInfo('A','045',true,[0,0]);
var A046 = new SpotsInfo('A','046',true,[0,0]);
var A047 = new SpotsInfo('A','047',true,[0,0]);
var A048 = new SpotsInfo('A','048',true,[0,0]);
var A049 = new SpotsInfo('A','049',true,[0,0]);
var A04A = new SpotsInfo('A','04A',true,[0,0]);
var A04B = new SpotsInfo('A','04B',true,[0,0]);
var A04C = new SpotsInfo('A','04C',true,[0,0]);
var A04D = new SpotsInfo('A','04D',true,[0,0]);
var A04E = new SpotsInfo('A','04E',true,[0,0]);
var A04F = new SpotsInfo('A','04F',true,[0,0]);
var A050 = new SpotsInfo('A','050',true,[0,0]);
var A051 = new SpotsInfo('A','051',true,[0,0]);
var A052 = new SpotsInfo('A','052',true,[0,0]);
var A053 = new SpotsInfo('A','053',true,[0,0]);
var A054 = new SpotsInfo('A','054',true,[0,0]);
var A055 = new SpotsInfo('A','055',true,[0,0]);
var A056 = new SpotsInfo('A','056',true,[0,0]);
var A057 = new SpotsInfo('A','057',true,[0,0]);
var A058 = new SpotsInfo('A','058',true,[0,0]);
var A059 = new SpotsInfo('A','059',true,[0,0]);
var A05A = new SpotsInfo('A','05A',true,[0,0]);
var A05B = new SpotsInfo('A','05B',true,[0,0]);
var A05C = new SpotsInfo('A','05C',true,[0,0]);
var A05D = new SpotsInfo('A','05D',true,[0,0]);
var A05E = new SpotsInfo('A','05E',true,[0,0]);
var A05F = new SpotsInfo('A','05F',true,[0,0]);
var A060 = new SpotsInfo('A','060',true,[0,0]);
var A061 = new SpotsInfo('A','061',true,[0,0]);
var A062 = new SpotsInfo('A','062',true,[0,0]);
var A063 = new SpotsInfo('A','063',true,[0,0]);
var A064 = new SpotsInfo('A','064',true,[0,0]);
var A065 = new SpotsInfo('A','065',true,[0,0]);
var A066 = new SpotsInfo('A','066',true,[0,0]);
var A067 = new SpotsInfo('A','067',true,[0,0]);
var A068 = new SpotsInfo('A','068',true,[0,0]);
var A069 = new SpotsInfo('A','069',true,[0,0]);
var A06A = new SpotsInfo('A','06A',true,[0,0]);
var A06B = new SpotsInfo('A','06B',true,[0,0]);
var A06C = new SpotsInfo('A','06C',true,[0,0]);
var A06D = new SpotsInfo('A','06D',true,[0,0]);
var A06E = new SpotsInfo('A','06E',true,[0,0]);
var A06F = new SpotsInfo('A','06F',true,[0,0]);
var A070 = new SpotsInfo('A','070',true,[0,0]);
var A071 = new SpotsInfo('A','071',true,[0,0]);
var A072 = new SpotsInfo('A','072',true,[0,0]);
var A073 = new SpotsInfo('A','073',true,[0,0]);
var A074 = new SpotsInfo('A','074',true,[0,0]);
var A075 = new SpotsInfo('A','075',true,[0,0]);
var lotASpots = [A001,A002,A003,A004,A005,A006,A007,A008,A009,A00A
				,A00B,A00C,A00D,A00E,A00F,A010,A011,A012,A013,A014
				,A015,A016,A017,A018,A019,A01A,A01B,A01C,A01D,A01E
				,A01F,A020,A021,A022,A023,A024,A025,A026,A027,A028
				,A029,A02A,A02B,A02C,A02D,A02E,A02F,A030,A031,A032
				,A033,A034,A035,A036,A037,A038,A039,A03A,A03B,A03C
				,A03D,A03E,A03F,A040,A041,A042,A043,A044,A045,A046
				,A047,A048,A049,A04A,A04B,A04C,A04D,A04E,A04F,A050
				,A051,A052,A053,A054,A055,A056,A057,A058,A059,A05A
				,A05B,A05C,A05D,A05E,A05F,A060,A061,A062,A063,A064
				,A065,A066,A067,A068,A069,A06A,A06B,A06C,A06D,A06E
				,A06F,A070,A071,A072,A073,A074,A075];

//Lot B - - - - - - - - - - - - - - - - - - - - - - - - -
var B001 = new SpotsInfo('B','001',true,[0,0]);
var B002 = new SpotsInfo('B','002',true,[0,0]);
var B003 = new SpotsInfo('B','003',true,[0,0]);
var B004 = new SpotsInfo('B','004',true,[0,0]);
var B005 = new SpotsInfo('B','005',true,[0,0]);
var B006 = new SpotsInfo('B','006',true,[0,0]);
var B007 = new SpotsInfo('B','007',true,[0,0]);
var B008 = new SpotsInfo('B','008',true,[0,0]);
var B009 = new SpotsInfo('B','009',true,[0,0]);
var B00A = new SpotsInfo('B','00A',true,[0,0]);
var B00B = new SpotsInfo('B','00B',true,[0,0]);
var B00C = new SpotsInfo('B','00C',true,[0,0]);
var B00D = new SpotsInfo('B','00D',true,[0,0]);
var B00E = new SpotsInfo('B','00E',true,[0,0]);
var B00F = new SpotsInfo('B','00F',true,[0,0]);
var B010 = new SpotsInfo('B','010',true,[0,0]);
var B011 = new SpotsInfo('B','011',true,[0,0]);
var B012 = new SpotsInfo('B','012',true,[0,0]);
var B013 = new SpotsInfo('B','013',true,[0,0]);
var B014 = new SpotsInfo('B','014',true,[0,0]);
var B015 = new SpotsInfo('B','015',true,[0,0]);
var B016 = new SpotsInfo('B','016',true,[0,0]);
var B017 = new SpotsInfo('B','017',true,[0,0]);
var B018 = new SpotsInfo('B','018',true,[0,0]);
var B019 = new SpotsInfo('B','019',true,[0,0]);
var B01A = new SpotsInfo('B','01A',true,[0,0]);
var lotBSpots = [B001,B002,B003,B004,B005,B006,B007,B008,B009,B00A
				,B00B,B00C,B00D,B00E,B00F,B010,B011,B012,B013,B014
				,B015,B016,B017,B018,B019,B01A];

//Lot C - - - - - - - - - - - - - - - - - - - - - - - - -
var C001 = new SpotsInfo('C','001',true,[0,0]);
var C002 = new SpotsInfo('C','002',true,[0,0]);
var C003 = new SpotsInfo('C','003',true,[0,0]);
var C004 = new SpotsInfo('C','004',true,[0,0]);
var C005 = new SpotsInfo('C','005',true,[0,0]);
var C006 = new SpotsInfo('C','006',true,[0,0]);
var C007 = new SpotsInfo('C','007',true,[0,0]);
var C008 = new SpotsInfo('C','008',true,[0,0]);
var C009 = new SpotsInfo('C','009',true,[0,0]);
var C00A = new SpotsInfo('C','00A',true,[0,0]);
var C00B = new SpotsInfo('C','00B',true,[0,0]);
var C00C = new SpotsInfo('C','00C',true,[0,0]);
var C00D = new SpotsInfo('C','00D',true,[0,0]);
var C00E = new SpotsInfo('C','00E',true,[0,0]);
var C00F = new SpotsInfo('C','00F',true,[0,0]);
var C010 = new SpotsInfo('C','010',true,[0,0]);
var C011 = new SpotsInfo('C','011',true,[0,0]);
var C012 = new SpotsInfo('C','012',true,[0,0]);
var C013 = new SpotsInfo('C','013',true,[0,0]);
var C014 = new SpotsInfo('C','014',true,[0,0]);
var lotCSpots = [C001,C002,C003,C004,C005,C006,C007,C008,C009,C00A
				,C00B,C00C,C00D,C00E,C00F,C010,C011,C012,C013,C014
				];

//Lot E - - - - - - - - - - - - - - - - - - - - - - - - -
var E001 = new SpotsInfo('E','001',true,[0,0]);
var E002 = new SpotsInfo('E','002',true,[0,0]);
var E003 = new SpotsInfo('E','003',true,[0,0]);
var E004 = new SpotsInfo('E','004',true,[0,0]);
var E005 = new SpotsInfo('E','005',true,[0,0]);
var E006 = new SpotsInfo('E','006',true,[0,0]);
var E007 = new SpotsInfo('E','007',true,[0,0]);
var E008 = new SpotsInfo('E','008',true,[0,0]);
var E009 = new SpotsInfo('E','009',true,[0,0]);
var E00A = new SpotsInfo('E','00A',true,[0,0]);
var E00B = new SpotsInfo('E','00B',true,[0,0]);
var E00C = new SpotsInfo('E','00C',true,[0,0]);
var E00D = new SpotsInfo('E','00D',true,[0,0]);
var E00E = new SpotsInfo('E','00E',true,[0,0]);
var E00F = new SpotsInfo('E','00F',true,[0,0]);
var E010 = new SpotsInfo('E','010',true,[0,0]);
var E011 = new SpotsInfo('E','011',true,[0,0]);
var E012 = new SpotsInfo('E','012',true,[0,0]);
var E013 = new SpotsInfo('E','013',true,[0,0]);
var E014 = new SpotsInfo('E','014',true,[0,0]);
var E015 = new SpotsInfo('E','015',true,[0,0]);
var E016 = new SpotsInfo('E','016',true,[0,0]);
var E017 = new SpotsInfo('E','017',true,[0,0]);
var E018 = new SpotsInfo('E','018',true,[0,0]);
var E019 = new SpotsInfo('E','019',true,[0,0]);
var E01A = new SpotsInfo('E','01A',true,[0,0]);
var E01B = new SpotsInfo('E','01B',true,[0,0]);
var E01C = new SpotsInfo('E','01C',true,[0,0]);
var E01D = new SpotsInfo('E','01D',true,[0,0]);
var E01E = new SpotsInfo('E','01E',true,[0,0]);
var E01F = new SpotsInfo('E','01F',true,[0,0]);
var E020 = new SpotsInfo('E','020',true,[0,0]);
var E021 = new SpotsInfo('E','021',true,[0,0]);
var E022 = new SpotsInfo('E','022',true,[0,0]);
var E023 = new SpotsInfo('E','023',true,[0,0]);
var E024 = new SpotsInfo('E','024',true,[0,0]);
var E025 = new SpotsInfo('E','025',true,[0,0]);
var E026 = new SpotsInfo('E','026',true,[0,0]);
var E027 = new SpotsInfo('E','027',true,[0,0]);
var E028 = new SpotsInfo('E','028',true,[0,0]);
var E029 = new SpotsInfo('E','029',true,[0,0]);
var E02A = new SpotsInfo('E','02A',true,[0,0]);
var E02B = new SpotsInfo('E','02B',true,[0,0]);
var E02C = new SpotsInfo('E','02C',true,[0,0]);
var E02D = new SpotsInfo('E','02D',true,[0,0]);
var E02E = new SpotsInfo('E','02E',true,[0,0]);
var E02F = new SpotsInfo('E','02F',true,[0,0]);
var E030 = new SpotsInfo('E','030',true,[0,0]);
var E031 = new SpotsInfo('E','031',true,[0,0]);
var E032 = new SpotsInfo('E','032',true,[0,0]);
var E033 = new SpotsInfo('E','033',true,[0,0]);
var E034 = new SpotsInfo('E','034',true,[0,0]);
var E035 = new SpotsInfo('E','035',true,[0,0]);
var E036 = new SpotsInfo('E','036',true,[0,0]);
var E037 = new SpotsInfo('E','037',true,[0,0]);
var E038 = new SpotsInfo('E','038',true,[0,0]);
var E039 = new SpotsInfo('E','039',true,[0,0]);
var E03A = new SpotsInfo('E','03A',true,[0,0]);
var E03B = new SpotsInfo('E','03B',true,[0,0]);
var E03C = new SpotsInfo('E','03C',true,[0,0]);
var E03D = new SpotsInfo('E','03D',true,[0,0]);
var E03E = new SpotsInfo('E','03E',true,[0,0]);
var E03F = new SpotsInfo('E','03F',true,[0,0]);
var E040 = new SpotsInfo('E','040',true,[0,0]);
var E041 = new SpotsInfo('E','041',true,[0,0]);
var E042 = new SpotsInfo('E','042',true,[0,0]);
var E043 = new SpotsInfo('E','043',true,[0,0]);
var E044 = new SpotsInfo('E','044',true,[0,0]);
var E045 = new SpotsInfo('E','045',true,[0,0]);
var E046 = new SpotsInfo('E','046',true,[0,0]);
var E047 = new SpotsInfo('E','047',true,[0,0]);
var E048 = new SpotsInfo('E','048',true,[0,0]);
var E049 = new SpotsInfo('E','049',true,[0,0]);
var E04A = new SpotsInfo('E','04A',true,[0,0]);
var E04B = new SpotsInfo('E','04B',true,[0,0]);
var E04C = new SpotsInfo('E','04C',true,[0,0]);
var E04D = new SpotsInfo('E','04D',true,[0,0]);
var E04E = new SpotsInfo('E','04E',true,[0,0]);
var E04F = new SpotsInfo('E','04F',true,[0,0]);
var E050 = new SpotsInfo('E','050',true,[0,0]);
var E051 = new SpotsInfo('E','051',true,[0,0]);
var E052 = new SpotsInfo('E','052',true,[0,0]);
var E053 = new SpotsInfo('E','053',true,[0,0]);
var E054 = new SpotsInfo('E','054',true,[0,0]);
var E055 = new SpotsInfo('E','055',true,[0,0]);
var E056 = new SpotsInfo('E','056',true,[0,0]);
var E057 = new SpotsInfo('E','057',true,[0,0]);
var E058 = new SpotsInfo('E','058',true,[0,0]);
var E059 = new SpotsInfo('E','059',true,[0,0]);
var E05A = new SpotsInfo('E','05A',true,[0,0]);
var E05B = new SpotsInfo('E','05B',true,[0,0]);
var E05C = new SpotsInfo('E','05C',true,[0,0]);
var E05D = new SpotsInfo('E','05D',true,[0,0]);
var E05E = new SpotsInfo('E','05E',true,[0,0]);
var E05F = new SpotsInfo('E','05F',true,[0,0]);
var E060 = new SpotsInfo('E','060',true,[0,0]);
var E061 = new SpotsInfo('E','061',true,[0,0]);
var E062 = new SpotsInfo('E','062',true,[0,0]);
var E063 = new SpotsInfo('E','063',true,[0,0]);
var E064 = new SpotsInfo('E','064',true,[0,0]);
var E065 = new SpotsInfo('E','065',true,[0,0]);
var E066 = new SpotsInfo('E','066',true,[0,0]);
var E067 = new SpotsInfo('E','067',true,[0,0]);
var E068 = new SpotsInfo('E','068',true,[0,0]);
var E069 = new SpotsInfo('E','069',true,[0,0]);
var E06A = new SpotsInfo('E','06A',true,[0,0]);
var E06B = new SpotsInfo('E','06B',true,[0,0]);
var E06C = new SpotsInfo('E','06C',true,[0,0]);
var E06D = new SpotsInfo('E','06D',true,[0,0]);
var E06E = new SpotsInfo('E','06E',true,[0,0]);
var E06F = new SpotsInfo('E','06F',true,[0,0]);
var E070 = new SpotsInfo('E','070',true,[0,0]);
var E071 = new SpotsInfo('E','071',true,[0,0]);
var E072 = new SpotsInfo('E','072',true,[0,0]);
var E073 = new SpotsInfo('E','073',true,[0,0]);
var E074 = new SpotsInfo('E','074',true,[0,0]);
var E075 = new SpotsInfo('E','075',true,[0,0]);
var E076 = new SpotsInfo('E','076',true,[0,0]);
var E077 = new SpotsInfo('E','077',true,[0,0]);
var E078 = new SpotsInfo('E','078',true,[0,0]);
var E079 = new SpotsInfo('E','079',true,[0,0]);
var E07A = new SpotsInfo('E','07A',true,[0,0]);
var E07B = new SpotsInfo('E','07B',true,[0,0]);
var E07C = new SpotsInfo('E','07C',true,[0,0]);
var E07D = new SpotsInfo('E','07D',true,[0,0]);
var E07E = new SpotsInfo('E','07E',true,[0,0]);
var E07F = new SpotsInfo('E','07F',true,[0,0]);
var E080 = new SpotsInfo('E','080',true,[0,0]);
var E081 = new SpotsInfo('E','081',true,[0,0]);
var E082 = new SpotsInfo('E','082',true,[0,0]);
var E083 = new SpotsInfo('E','083',true,[0,0]);
var E084 = new SpotsInfo('E','084',true,[0,0]);
var E085 = new SpotsInfo('E','085',true,[0,0]);
var E086 = new SpotsInfo('E','086',true,[0,0]);
var E087 = new SpotsInfo('E','087',true,[0,0]);
var E088 = new SpotsInfo('E','088',true,[0,0]);
var E089 = new SpotsInfo('E','089',true,[0,0]);
var E08A = new SpotsInfo('E','08A',true,[0,0]);
var E08B = new SpotsInfo('E','08B',true,[0,0]);
var E08C = new SpotsInfo('E','08C',true,[0,0]);
var E08D = new SpotsInfo('E','08D',true,[0,0]);
var E08E = new SpotsInfo('E','08E',true,[0,0]);
var E08F = new SpotsInfo('E','08F',true,[0,0]);
var E090 = new SpotsInfo('E','090',true,[0,0]);
var E091 = new SpotsInfo('E','091',true,[0,0]);
var E092 = new SpotsInfo('E','092',true,[0,0]);
var E093 = new SpotsInfo('E','093',true,[0,0]);
var E094 = new SpotsInfo('E','094',true,[0,0]);
var E095 = new SpotsInfo('E','095',true,[0,0]);
var E096 = new SpotsInfo('E','096',true,[0,0]);
var E097 = new SpotsInfo('E','097',true,[0,0]);
var E098 = new SpotsInfo('E','098',true,[0,0]);
var E099 = new SpotsInfo('E','099',true,[0,0]);
var E09A = new SpotsInfo('E','09A',true,[0,0]);
var E09B = new SpotsInfo('E','09B',true,[0,0]);
var E09C = new SpotsInfo('E','09C',true,[0,0]);
var E09D = new SpotsInfo('E','09D',true,[0,0]);
var E09E = new SpotsInfo('E','09E',true,[0,0]);
var E09F = new SpotsInfo('E','09F',true,[0,0]);
var E0A0 = new SpotsInfo('E','0A0',true,[0,0]);
var E0A1 = new SpotsInfo('E','0A1',true,[0,0]);
var E0A2 = new SpotsInfo('E','0A2',true,[0,0]);
var E0A3 = new SpotsInfo('E','0A3',true,[0,0]);
var E0A4 = new SpotsInfo('E','0A4',true,[0,0]);
var E0A5 = new SpotsInfo('E','0A5',true,[0,0]);
var E0A6 = new SpotsInfo('E','0A6',true,[0,0]);
var E0A7 = new SpotsInfo('E','0A7',true,[0,0]);
var E0A8 = new SpotsInfo('E','0A8',true,[0,0]);
var E0A9 = new SpotsInfo('E','0A9',true,[0,0]);
var E0AA = new SpotsInfo('E','0AA',true,[0,0]);
var E0AB = new SpotsInfo('E','0AB',true,[0,0]);
var E0AC = new SpotsInfo('E','0AC',true,[0,0]);
var E0AD = new SpotsInfo('E','0AD',true,[0,0]);
var E0AE = new SpotsInfo('E','0AE',true,[0,0]);
var E0AF = new SpotsInfo('E','0AF',true,[0,0]);
var E0B0 = new SpotsInfo('E','0B0',true,[0,0]);
var E0B1 = new SpotsInfo('E','0B1',true,[0,0]);
var E0B2 = new SpotsInfo('E','0B2',true,[0,0]);
var E0B3 = new SpotsInfo('E','0B3',true,[0,0]);
var E0B4 = new SpotsInfo('E','0B4',true,[0,0]);
var E0B5 = new SpotsInfo('E','0B5',true,[0,0]);
var E0B6 = new SpotsInfo('E','0B6',true,[0,0]);
var E0B7 = new SpotsInfo('E','0B7',true,[0,0]);
var E0B8 = new SpotsInfo('E','0B8',true,[0,0]);
var E0B9 = new SpotsInfo('E','0B9',true,[0,0]);
var E0BA = new SpotsInfo('E','0BA',true,[0,0]);
var E0BB = new SpotsInfo('E','0BB',true,[0,0]);
var E0BC = new SpotsInfo('E','0BC',true,[0,0]);
var E0BD = new SpotsInfo('E','0BD',true,[0,0]);
var E0BE = new SpotsInfo('E','0BE',true,[0,0]);
var E0BF = new SpotsInfo('E','0BF',true,[0,0]);
var E0C0 = new SpotsInfo('E','0C0',true,[0,0]);
var E0C1 = new SpotsInfo('E','0C1',true,[0,0]);
var E0C2 = new SpotsInfo('E','0C2',true,[0,0]);
var E0C3 = new SpotsInfo('E','0C3',true,[0,0]);
var E0C4 = new SpotsInfo('E','0C4',true,[0,0]);
var E0C5 = new SpotsInfo('E','0C5',true,[0,0]);
var E0C6 = new SpotsInfo('E','0C6',true,[0,0]);
var E0C7 = new SpotsInfo('E','0C7',true,[0,0]);
var E0C8 = new SpotsInfo('E','0C8',true,[0,0]);
var E0C9 = new SpotsInfo('E','0C9',true,[0,0]);
var E0CA = new SpotsInfo('E','0CA',true,[0,0]);
var E0CB = new SpotsInfo('E','0CB',true,[0,0]);
var E0CC = new SpotsInfo('E','0CC',true,[0,0]);
var E0CD = new SpotsInfo('E','0CD',true,[0,0]);
var E0CE = new SpotsInfo('E','0CE',true,[0,0]);
var E0CF = new SpotsInfo('E','0CF',true,[0,0]);
var E0D0 = new SpotsInfo('E','0D0',true,[0,0]);
var E0D1 = new SpotsInfo('E','0D1',true,[0,0]);
var E0D2 = new SpotsInfo('E','0D2',true,[0,0]);
var E0D3 = new SpotsInfo('E','0D3',true,[0,0]);
var E0D4 = new SpotsInfo('E','0D4',true,[0,0]);
var E0D5 = new SpotsInfo('E','0D5',true,[0,0]);
var E0D6 = new SpotsInfo('E','0D6',true,[0,0]);
var E0D7 = new SpotsInfo('E','0D7',true,[0,0]);
var E0D8 = new SpotsInfo('E','0D8',true,[0,0]);
var E0D9 = new SpotsInfo('E','0D9',true,[0,0]);
var E0DA = new SpotsInfo('E','0DA',true,[0,0]);
var E0DB = new SpotsInfo('E','0DB',true,[0,0]);
var E0DC = new SpotsInfo('E','0DC',true,[0,0]);
var E0DD = new SpotsInfo('E','0DD',true,[0,0]);
var E0DE = new SpotsInfo('E','0DE',true,[0,0]);
var E0DF = new SpotsInfo('E','0DF',true,[0,0]);
var E0E0 = new SpotsInfo('E','0E0',true,[0,0]);
var E0E1 = new SpotsInfo('E','0E1',true,[0,0]);
var E0E2 = new SpotsInfo('E','0E2',true,[0,0]);
var E0E3 = new SpotsInfo('E','0E3',true,[0,0]);
var E0E4 = new SpotsInfo('E','0E4',true,[0,0]);
var E0E5 = new SpotsInfo('E','0E5',true,[0,0]);
var E0E6 = new SpotsInfo('E','0E6',true,[0,0]);
var E0E7 = new SpotsInfo('E','0E7',true,[0,0]);
var E0E8 = new SpotsInfo('E','0E8',true,[0,0]);
var E0E9 = new SpotsInfo('E','0E9',true,[0,0]);
var E0EA = new SpotsInfo('E','0EA',true,[0,0]);
var E0EB = new SpotsInfo('E','0EB',true,[0,0]);
var E0EC = new SpotsInfo('E','0EC',true,[0,0]);
var E0ED = new SpotsInfo('E','0ED',true,[0,0]);
var E0EE = new SpotsInfo('E','0EE',true,[0,0]);
var E0EF = new SpotsInfo('E','0EF',true,[0,0]);
var E0F0 = new SpotsInfo('E','0F0',true,[0,0]);
var E0F1 = new SpotsInfo('E','0F1',true,[0,0]);
var E0F2 = new SpotsInfo('E','0F2',true,[0,0]);
var E0F3 = new SpotsInfo('E','0F3',true,[0,0]);
var E0F4 = new SpotsInfo('E','0F4',true,[0,0]);
var E0F5 = new SpotsInfo('E','0F5',true,[0,0]);
var E0F6 = new SpotsInfo('E','0F6',true,[0,0]);
var E0F7 = new SpotsInfo('E','0F7',true,[0,0]);
var E0F8 = new SpotsInfo('E','0F8',true,[0,0]);
var E0F9 = new SpotsInfo('E','0F9',true,[0,0]);
var E0FA = new SpotsInfo('E','0FA',true,[0,0]);
var E0FB = new SpotsInfo('E','0FB',true,[0,0]);
var E0FC = new SpotsInfo('E','0FC',true,[0,0]);
var E0FD = new SpotsInfo('E','0FD',true,[0,0]);
var E0FE = new SpotsInfo('E','0FE',true,[0,0]);
var E0FF = new SpotsInfo('E','0FF',true,[0,0]);
var E100 = new SpotsInfo('E','100',true,[0,0]);
var E101 = new SpotsInfo('E','101',true,[0,0]);
var E102 = new SpotsInfo('E','102',true,[0,0]);
var E103 = new SpotsInfo('E','103',true,[0,0]);
var E104 = new SpotsInfo('E','104',true,[0,0]);
var E105 = new SpotsInfo('E','105',true,[0,0]);
var E106 = new SpotsInfo('E','106',true,[0,0]);
var E107 = new SpotsInfo('E','107',true,[0,0]);
var E108 = new SpotsInfo('E','108',true,[0,0]);
var E109 = new SpotsInfo('E','109',true,[0,0]);
var E10A = new SpotsInfo('E','10A',true,[0,0]);
var E10B = new SpotsInfo('E','10B',true,[0,0]);
var E10C = new SpotsInfo('E','10C',true,[0,0]);
var E10D = new SpotsInfo('E','10D',true,[0,0]);
var E10E = new SpotsInfo('E','10E',true,[0,0]);
var E10F = new SpotsInfo('E','10F',true,[0,0]);
var E110 = new SpotsInfo('E','110',true,[0,0]);
var E111 = new SpotsInfo('E','111',true,[0,0]);
var E112 = new SpotsInfo('E','112',true,[0,0]);
var E113 = new SpotsInfo('E','113',true,[0,0]);
var E114 = new SpotsInfo('E','114',true,[0,0]);
var E115 = new SpotsInfo('E','115',true,[0,0]);
var E116 = new SpotsInfo('E','116',true,[0,0]);
var E117 = new SpotsInfo('E','117',true,[0,0]);
var E118 = new SpotsInfo('E','118',true,[0,0]);
var E119 = new SpotsInfo('E','119',true,[0,0]);
var E11A = new SpotsInfo('E','11A',true,[0,0]);
var E11B = new SpotsInfo('E','11B',true,[0,0]);
var E11C = new SpotsInfo('E','11C',true,[0,0]);
var E11D = new SpotsInfo('E','11D',true,[0,0]);
var E11E = new SpotsInfo('E','11E',true,[0,0]);
var E11F = new SpotsInfo('E','11F',true,[0,0]);
var E120 = new SpotsInfo('E','120',true,[0,0]);
var E121 = new SpotsInfo('E','121',true,[0,0]);
var E122 = new SpotsInfo('E','122',true,[0,0]);
var E123 = new SpotsInfo('E','123',true,[0,0]);
var E124 = new SpotsInfo('E','124',true,[0,0]);
var E125 = new SpotsInfo('E','125',true,[0,0]);
var E126 = new SpotsInfo('E','126',true,[0,0]);
var E127 = new SpotsInfo('E','127',true,[0,0]);
var E128 = new SpotsInfo('E','128',true,[0,0]);
var E129 = new SpotsInfo('E','129',true,[0,0]);
var E12A = new SpotsInfo('E','12A',true,[0,0]);
var E12B = new SpotsInfo('E','12B',true,[0,0]);
var E12C = new SpotsInfo('E','12C',true,[0,0]);
var E12D = new SpotsInfo('E','12D',true,[0,0]);
var E12E = new SpotsInfo('E','12E',true,[0,0]);
var E12F = new SpotsInfo('E','12F',true,[0,0]);
var E130 = new SpotsInfo('E','130',true,[0,0]);
var E131 = new SpotsInfo('E','131',true,[0,0]);
var E132 = new SpotsInfo('E','132',true,[0,0]);
var E133 = new SpotsInfo('E','133',true,[0,0]);
var E134 = new SpotsInfo('E','134',true,[0,0]);
var E135 = new SpotsInfo('E','135',true,[0,0]);
var E136 = new SpotsInfo('E','136',true,[0,0]);
var E137 = new SpotsInfo('E','137',true,[0,0]);
var E138 = new SpotsInfo('E','138',true,[0,0]);
var E139 = new SpotsInfo('E','139',true,[0,0]);
var E13A = new SpotsInfo('E','13A',true,[0,0]);
var E13B = new SpotsInfo('E','13B',true,[0,0]);
var E13C = new SpotsInfo('E','13C',true,[0,0]);
var E13D = new SpotsInfo('E','13D',true,[0,0]);
var E13E = new SpotsInfo('E','13E',true,[0,0]);
var E13F = new SpotsInfo('E','13F',true,[0,0]);
var E140 = new SpotsInfo('E','140',true,[0,0]);
var E141 = new SpotsInfo('E','141',true,[0,0]);
var E142 = new SpotsInfo('E','142',true,[0,0]);
var E143 = new SpotsInfo('E','143',true,[0,0]);
var E144 = new SpotsInfo('E','144',true,[0,0]);
var E145 = new SpotsInfo('E','145',true,[0,0]);
var E146 = new SpotsInfo('E','146',true,[0,0]);
var E147 = new SpotsInfo('E','147',true,[0,0]);
var E148 = new SpotsInfo('E','148',true,[0,0]);
var E149 = new SpotsInfo('E','149',true,[0,0]);
var E14A = new SpotsInfo('E','14A',true,[0,0]);
var E14B = new SpotsInfo('E','14B',true,[0,0]);
var E14C = new SpotsInfo('E','14C',true,[0,0]);
var E14D = new SpotsInfo('E','14D',true,[0,0]);
var E14E = new SpotsInfo('E','14E',true,[0,0]);
var E14F = new SpotsInfo('E','14F',true,[0,0]);
var E150 = new SpotsInfo('E','150',true,[0,0]);
var E151 = new SpotsInfo('E','151',true,[0,0]);
var E152 = new SpotsInfo('E','152',true,[0,0]);
var E153 = new SpotsInfo('E','153',true,[0,0]);
var E154 = new SpotsInfo('E','154',true,[0,0]);
var E155 = new SpotsInfo('E','155',true,[0,0]);
var E156 = new SpotsInfo('E','156',true,[0,0]);
var E157 = new SpotsInfo('E','157',true,[0,0]);
var E158 = new SpotsInfo('E','158',true,[0,0]);
var E159 = new SpotsInfo('E','159',true,[0,0]);
var E15A = new SpotsInfo('E','15A',true,[0,0]);
var E15B = new SpotsInfo('E','15B',true,[0,0]);
var E15C = new SpotsInfo('E','15C',true,[0,0]);
var E15D = new SpotsInfo('E','15D',true,[0,0]);
var E15E = new SpotsInfo('E','15E',true,[0,0]);
var E15F = new SpotsInfo('E','15F',true,[0,0]);
var E160 = new SpotsInfo('E','160',true,[0,0]);
var E161 = new SpotsInfo('E','161',true,[0,0]);
var E162 = new SpotsInfo('E','162',true,[0,0]);
var E163 = new SpotsInfo('E','163',true,[0,0]);
var E164 = new SpotsInfo('E','164',true,[0,0]);
var E165 = new SpotsInfo('E','165',true,[0,0]);
var E166 = new SpotsInfo('E','166',true,[0,0]);
var E167 = new SpotsInfo('E','167',true,[0,0]);
var E168 = new SpotsInfo('E','168',true,[0,0]);
var E169 = new SpotsInfo('E','169',true,[0,0]);
var lotESpots = [E001,E002,E003,E004,E005,E006,E007,E008,E009,E00A
				,E00B,E00C,E00D,E00E,E00F,E010,E011,E012,E013,E014
				,E015,E016,E017,E018,E019,E01A,E01B,E01C,E01D,E01E
				,E01F,E020,E021,E022,E023,E024,E025,E026,E027,E028
				,E029,E02A,E02B,E02C,E02D,E02E,E02F,E030,E031,E032
				,E033,E034,E035,E036,E037,E038,E039,E03A,E03B,E03C
				,E03D,E03E,E03F,E040,E041,E042,E043,E044,E045,E046
				,E047,E048,E049,E04A,E04B,E04C,E04D,E04E,E04F,E050
				,E051,E052,E053,E054,E055,E056,E057,E058,E059,E05A
				,E05B,E05C,E05D,E05E,E05F,E060,E061,E062,E063,E064
				,E065,E066,E067,E068,E069,E06A,E06B,E06C,E06D,E06E
				,E06F,E070,E071,E072,E073,E074,E075,E076,E077,E078
				,E079,E07A,E07B,E07C,E07D,E07E,E07F,E080,E081,E082
				,E083,E084,E085,E086,E087,E088,E089,E08A,E08B,E08C
				,E08D,E08E,E08F,E090,E091,E092,E093,E094,E095,E096
				,E097,E098,E099,E09A,E09B,E09C,E09D,E09E,E09F,E0A0
				,E0A1,E0A2,E0A3,E0A4,E0A5,E0A6,E0A7,E0A8,E0A9,E0AA
				,E0AB,E0AC,E0AD,E0AE,E0AF,E0B0,E0B1,E0B2,E0B3,E0B4
				,E0B5,E0B6,E0B7,E0B8,E0B9,E0BA,E0BB,E0BC,E0BD,E0BE
				,E0BF,E0C0,E0C1,E0C2,E0C3,E0C4,E0C5,E0C6,E0C7,E0C8
				,E0C9,E0CA,E0CB,E0CC,E0CD,E0CE,E0CF,E0D0,E0D1,E0D2
				,E0D3,E0D4,E0D5,E0D6,E0D7,E0D8,E0D9,E0DA,E0DB,E0DC
				,E0DD,E0DE,E0DF,E0E0,E0E1,E0E2,E0E3,E0E4,E0E5,E0E6
				,E0E7,E0E8,E0E9,E0EA,E0EB,E0EC,E0ED,E0EE,E0EF,E0F0
				,E0F1,E0F2,E0F3,E0F4,E0F5,E0F6,E0F7,E0F8,E0F9,E0FA
				,E0FB,E0FC,E0FD,E0FE,E0FF,E100,E101,E102,E103,E104
				,E105,E106,E107,E108,E109,E10A,E10B,E10C,E10D,E10E
				,E10F,E110,E111,E112,E113,E114,E115,E116,E117,E118
				,E119,E11A,E11B,E11C,E11D,E11E,E11F,E120,E121,E122
				,E123,E124,E125,E126,E127,E128,E129,E12A,E12B,E12C
				,E12D,E12E,E12F,E130,E131,E132,E133,E134,E135,E136
				,E137,E138,E139,E13A,E13B,E13C,E13D,E13E,E13F,E140
				,E141,E142,E143,E144,E145,E146,E147,E148,E149,E14A
				,E14B,E14C,E14D,E14E,E14F,E150,E151,E152,E153,E154
				,E155,E156,E157,E158,E159,E15A,E15B,E15C,E15D,E15E
				,E15F,E160,E161,E162,E163,E164,E165,E166,E167,E168
				,E169];

//Lot F - - - - - - - - - - - - - - - - - - - - - - - - -
var F001 = new SpotsInfo('F','001',true,[0,0]);
var F002 = new SpotsInfo('F','002',true,[0,0]);
var F003 = new SpotsInfo('F','003',true,[0,0]);
var F004 = new SpotsInfo('F','004',true,[0,0]);
var F005 = new SpotsInfo('F','005',true,[0,0]);
var F006 = new SpotsInfo('F','006',true,[0,0]);
var F007 = new SpotsInfo('F','007',true,[0,0]);
var F008 = new SpotsInfo('F','008',true,[0,0]);
var F009 = new SpotsInfo('F','009',true,[0,0]);
var F00A = new SpotsInfo('F','00A',true,[0,0]);
var F00B = new SpotsInfo('F','00B',true,[0,0]);
var F00C = new SpotsInfo('F','00C',true,[0,0]);
var F00D = new SpotsInfo('F','00D',true,[0,0]);
var F00E = new SpotsInfo('F','00E',true,[0,0]);
var F00F = new SpotsInfo('F','00F',true,[0,0]);
var F010 = new SpotsInfo('F','010',true,[0,0]);
var F011 = new SpotsInfo('F','011',true,[0,0]);
var F012 = new SpotsInfo('F','012',true,[0,0]);
var F013 = new SpotsInfo('F','013',true,[0,0]);
var F014 = new SpotsInfo('F','014',true,[0,0]);
var F015 = new SpotsInfo('F','015',true,[0,0]);
var F016 = new SpotsInfo('F','016',true,[0,0]);
var F017 = new SpotsInfo('F','017',true,[0,0]);
var F018 = new SpotsInfo('F','018',true,[0,0]);
var F019 = new SpotsInfo('F','019',true,[0,0]);
var F01A = new SpotsInfo('F','01A',true,[0,0]);
var F01B = new SpotsInfo('F','01B',true,[0,0]);
var F01C = new SpotsInfo('F','01C',true,[0,0]);
var F01D = new SpotsInfo('F','01D',true,[0,0]);
var F01E = new SpotsInfo('F','01E',true,[0,0]);
var F01F = new SpotsInfo('F','01F',true,[0,0]);
var F020 = new SpotsInfo('F','020',true,[0,0]);
var F021 = new SpotsInfo('F','021',true,[0,0]);
var F022 = new SpotsInfo('F','022',true,[0,0]);
var F023 = new SpotsInfo('F','023',true,[0,0]);
var F024 = new SpotsInfo('F','024',true,[0,0]);
var F025 = new SpotsInfo('F','025',true,[0,0]);
var F026 = new SpotsInfo('F','026',true,[0,0]);
var F027 = new SpotsInfo('F','027',true,[0,0]);
var F028 = new SpotsInfo('F','028',true,[0,0]);
var F029 = new SpotsInfo('F','029',true,[0,0]);
var F02A = new SpotsInfo('F','02A',true,[0,0]);
var F02B = new SpotsInfo('F','02B',true,[0,0]);
var F02C = new SpotsInfo('F','02C',true,[0,0]);
var F02D = new SpotsInfo('F','02D',true,[0,0]);
var F02E = new SpotsInfo('F','02E',true,[0,0]);
var F02F = new SpotsInfo('F','02F',true,[0,0]);
var F030 = new SpotsInfo('F','030',true,[0,0]);
var F031 = new SpotsInfo('F','031',true,[0,0]);
var F032 = new SpotsInfo('F','032',true,[0,0]);
var F033 = new SpotsInfo('F','033',true,[0,0]);
var F034 = new SpotsInfo('F','034',true,[0,0]);
var F035 = new SpotsInfo('F','035',true,[0,0]);
var F036 = new SpotsInfo('F','036',true,[0,0]);
var F037 = new SpotsInfo('F','037',true,[0,0]);
var F038 = new SpotsInfo('F','038',true,[0,0]);
var F039 = new SpotsInfo('F','039',true,[0,0]);
var F03A = new SpotsInfo('F','03A',true,[0,0]);
var F03B = new SpotsInfo('F','03B',true,[0,0]);
var F03C = new SpotsInfo('F','03C',true,[0,0]);
var lotFSpots = [F001,F002,F003,F004,F005,F006,F007,F008,F009,F00A
				,F00B,F00C,F00D,F00E,F00F,F010,F011,F012,F013,F014
				,F015,F016,F017,F018,F019,F01A,F01B,F01C,F01D,F01E
				,F01F,F020,F021,F022,F023,F024,F025,F026,F027,F028
				,F029,F02A,F02B,F02C,F02D,F02E,F02F,F030,F031,F032
				,F033,F034,F035,F036,F037,F038,F039,F03A,F03B,F03C
				];

//Lot G - - - - - - - - - - - - - - - - - - - - - - - - -
var G001 = new SpotsInfo('G','001',true,[0,0]);
var G002 = new SpotsInfo('G','002',true,[0,0]);
var G003 = new SpotsInfo('G','003',true,[0,0]);
var G004 = new SpotsInfo('G','004',true,[0,0]);
var G005 = new SpotsInfo('G','005',true,[0,0]);
var G006 = new SpotsInfo('G','006',true,[0,0]);
var G007 = new SpotsInfo('G','007',true,[0,0]);
var G008 = new SpotsInfo('G','008',true,[0,0]);
var G009 = new SpotsInfo('G','009',true,[0,0]);
var G00A = new SpotsInfo('G','00A',true,[0,0]);
var G00B = new SpotsInfo('G','00B',true,[0,0]);
var G00C = new SpotsInfo('G','00C',true,[0,0]);
var G00D = new SpotsInfo('G','00D',true,[0,0]);
var G00E = new SpotsInfo('G','00E',true,[0,0]);
var G00F = new SpotsInfo('G','00F',true,[0,0]);
var G010 = new SpotsInfo('G','010',true,[0,0]);
var G011 = new SpotsInfo('G','011',true,[0,0]);
var G012 = new SpotsInfo('G','012',true,[0,0]);
var G013 = new SpotsInfo('G','013',true,[0,0]);
var G014 = new SpotsInfo('G','014',true,[0,0]);
var G015 = new SpotsInfo('G','015',true,[0,0]);
var G016 = new SpotsInfo('G','016',true,[0,0]);
var G017 = new SpotsInfo('G','017',true,[0,0]);
var G018 = new SpotsInfo('G','018',true,[0,0]);
var G019 = new SpotsInfo('G','019',true,[0,0]);
var G01A = new SpotsInfo('G','01A',true,[0,0]);
var G01B = new SpotsInfo('G','01B',true,[0,0]);
var G01C = new SpotsInfo('G','01C',true,[0,0]);
var G01D = new SpotsInfo('G','01D',true,[0,0]);
var G01E = new SpotsInfo('G','01E',true,[0,0]);
var G01F = new SpotsInfo('G','01F',true,[0,0]);
var G020 = new SpotsInfo('G','020',true,[0,0]);
var G021 = new SpotsInfo('G','021',true,[0,0]);
var G022 = new SpotsInfo('G','022',true,[0,0]);
var G023 = new SpotsInfo('G','023',true,[0,0]);
var G024 = new SpotsInfo('G','024',true,[0,0]);
var G025 = new SpotsInfo('G','025',true,[0,0]);
var G026 = new SpotsInfo('G','026',true,[0,0]);
var G027 = new SpotsInfo('G','027',true,[0,0]);
var G028 = new SpotsInfo('G','028',true,[0,0]);
var G029 = new SpotsInfo('G','029',true,[0,0]);
var G02A = new SpotsInfo('G','02A',true,[0,0]);
var G02B = new SpotsInfo('G','02B',true,[0,0]);
var G02C = new SpotsInfo('G','02C',true,[0,0]);
var G02D = new SpotsInfo('G','02D',true,[0,0]);
var G02E = new SpotsInfo('G','02E',true,[0,0]);
var lotGSpots = [G001,G002,G003,G004,G005,G006,G007,G008,G009,G00A
				,G00B,G00C,G00D,G00E,G00F,G010,G011,G012,G013,G014
				,G015,G016,G017,G018,G019,G01A,G01B,G01C,G01D,G01E
				,G01F,G020,G021,G022,G023,G024,G025,G026,G027,G028
				,G029,G02A,G02B,G02C,G02D,G02E];

//Lot H - - - - - - - - - - - - - - - - - - - - - - - - -
var H001 = new SpotsInfo('H','001',true,[0,0]);
var H002 = new SpotsInfo('H','002',true,[0,0]);
var H003 = new SpotsInfo('H','003',true,[0,0]);
var H004 = new SpotsInfo('H','004',true,[0,0]);
var H005 = new SpotsInfo('H','005',true,[0,0]);
var H006 = new SpotsInfo('H','006',true,[0,0]);
var H007 = new SpotsInfo('H','007',true,[0,0]);
var H008 = new SpotsInfo('H','008',true,[0,0]);
var lotHSpots = [H001,H002,H003,H004,H005,H006,H007,H008];

//Lot I - - - - - - - - - - - - - - - - - - - - - - - - -
var I001 = new SpotsInfo('I','001',true,[190,20]);
var I002 = new SpotsInfo('I','002',true,[140,20]);
var I003 = new SpotsInfo('I','003',true,[115,20]);
var I004 = new SpotsInfo('I','004',true,[90,20]);
var I005 = new SpotsInfo('I','005',true,[65,20]);
var I006 = new SpotsInfo('I','006',true,[40,20]);
var I007 = new SpotsInfo('I','007',true,[15,20]);
var I008 = new SpotsInfo('I','008',true,[165,120]);
var I009 = new SpotsInfo('I','009',true,[140,120]);
var I00A = new SpotsInfo('I','00A',true,[102.5,120]);
var I00B = new SpotsInfo('I','00B',true,[77.5,120]);
var I00C = new SpotsInfo('I','00C',true,[40,120]);
var lotISpots = [I001,I002,I003,I004,I005,I006,I007,I008,I009,I00A
				,I00B,I00C];

//Lot J - - - - - - - - - - - - - - - - - - - - - - - - -
var J001 = new SpotsInfo('J','001',true,[0,0]);
var J002 = new SpotsInfo('J','002',true,[0,0]);
var J003 = new SpotsInfo('J','003',true,[0,0]);
var J004 = new SpotsInfo('J','004',true,[0,0]);
var J005 = new SpotsInfo('J','005',true,[0,0]);
var J006 = new SpotsInfo('J','006',true,[0,0]);
var J007 = new SpotsInfo('J','007',true,[0,0]);
var J008 = new SpotsInfo('J','008',true,[0,0]);
var J009 = new SpotsInfo('J','009',true,[0,0]);
var J00A = new SpotsInfo('J','00A',true,[0,0]);
var J00B = new SpotsInfo('J','00B',true,[0,0]);
var J00C = new SpotsInfo('J','00C',true,[0,0]);
var J00D = new SpotsInfo('J','00D',true,[0,0]);
var J00E = new SpotsInfo('J','00E',true,[0,0]);
var J00F = new SpotsInfo('J','00F',true,[0,0]);
var J010 = new SpotsInfo('J','010',true,[0,0]);
var J011 = new SpotsInfo('J','011',true,[0,0]);
var J012 = new SpotsInfo('J','012',true,[0,0]);
var J013 = new SpotsInfo('J','013',true,[0,0]);
var J014 = new SpotsInfo('J','014',true,[0,0]);
var J015 = new SpotsInfo('J','015',true,[0,0]);
var J016 = new SpotsInfo('J','016',true,[0,0]);
var J017 = new SpotsInfo('J','017',true,[0,0]);
var J018 = new SpotsInfo('J','018',true,[0,0]);
var J019 = new SpotsInfo('J','019',true,[0,0]);
var J01A = new SpotsInfo('J','01A',true,[0,0]);
var J01B = new SpotsInfo('J','01B',true,[0,0]);
var J01C = new SpotsInfo('J','01C',true,[0,0]);
var J01D = new SpotsInfo('J','01D',true,[0,0]);
var J01E = new SpotsInfo('J','01E',true,[0,0]);
var J01F = new SpotsInfo('J','01F',true,[0,0]);
var J020 = new SpotsInfo('J','020',true,[0,0]);
var J021 = new SpotsInfo('J','021',true,[0,0]);
var J022 = new SpotsInfo('J','022',true,[0,0]);
var J023 = new SpotsInfo('J','023',true,[0,0]);
var J024 = new SpotsInfo('J','024',true,[0,0]);
var lotJSpots = [J001,J002,J003,J004,J005,J006,J007,J008,J009,J00A
				,J00B,J00C,J00D,J00E,J00F,J010,J011,J012,J013,J014
				,J015,J016,J017,J018,J019,J01A,J01B,J01C,J01D,J01E
				,J01F,J020,J021,J022,J023,J024];

//Lot K - - - - - - - - - - - - - - - - - - - - - - - - -
var K001 = new SpotsInfo('K','001',true,[0,0]);
var K002 = new SpotsInfo('K','002',true,[0,0]);
var K003 = new SpotsInfo('K','003',true,[0,0]);
var K004 = new SpotsInfo('K','004',true,[0,0]);
var K005 = new SpotsInfo('K','005',true,[0,0]);
var K006 = new SpotsInfo('K','006',true,[0,0]);
var K007 = new SpotsInfo('K','007',true,[0,0]);
var K008 = new SpotsInfo('K','008',true,[0,0]);
var K009 = new SpotsInfo('K','009',true,[0,0]);
var K00A = new SpotsInfo('K','00A',true,[0,0]);
var K00B = new SpotsInfo('K','00B',true,[0,0]);
var K00C = new SpotsInfo('K','00C',true,[0,0]);
var K00D = new SpotsInfo('K','00D',true,[0,0]);
var K00E = new SpotsInfo('K','00E',true,[0,0]);
var K00F = new SpotsInfo('K','00F',true,[0,0]);
var K010 = new SpotsInfo('K','010',true,[0,0]);
var K011 = new SpotsInfo('K','011',true,[0,0]);
var K012 = new SpotsInfo('K','012',true,[0,0]);
var K013 = new SpotsInfo('K','013',true,[0,0]);
var K014 = new SpotsInfo('K','014',true,[0,0]);
var K015 = new SpotsInfo('K','015',true,[0,0]);
var K016 = new SpotsInfo('K','016',true,[0,0]);
var lotKSpots = [K001,K002,K003,K004,K005,K006,K007,K008,K009,K00A
				,K00B,K00C,K00D,K00E,K00F,K010,K011,K012,K013,K014
				,K015,K016];

//Lot M - - - - - - - - - - - - - - - - - - - - - - - - -
var M001 = new SpotsInfo('M','001',true,[0,0]);
var M002 = new SpotsInfo('M','002',true,[0,0]);
var M003 = new SpotsInfo('M','003',true,[0,0]);
var M004 = new SpotsInfo('M','004',true,[0,0]);
var M005 = new SpotsInfo('M','005',true,[0,0]);
var M006 = new SpotsInfo('M','006',true,[0,0]);
var M007 = new SpotsInfo('M','007',true,[0,0]);
var M008 = new SpotsInfo('M','008',true,[0,0]);
var M009 = new SpotsInfo('M','009',true,[0,0]);
var M00A = new SpotsInfo('M','00A',true,[0,0]);
var M00B = new SpotsInfo('M','00B',true,[0,0]);
var M00C = new SpotsInfo('M','00C',true,[0,0]);
var M00D = new SpotsInfo('M','00D',true,[0,0]);
var M00E = new SpotsInfo('M','00E',true,[0,0]);
var M00F = new SpotsInfo('M','00F',true,[0,0]);
var M010 = new SpotsInfo('M','010',true,[0,0]);
var M011 = new SpotsInfo('M','011',true,[0,0]);
var M012 = new SpotsInfo('M','012',true,[0,0]);
var M013 = new SpotsInfo('M','013',true,[0,0]);
var M014 = new SpotsInfo('M','014',true,[0,0]);
var M015 = new SpotsInfo('M','015',true,[0,0]);
var M016 = new SpotsInfo('M','016',true,[0,0]);
var M017 = new SpotsInfo('M','017',true,[0,0]);
var M018 = new SpotsInfo('M','018',true,[0,0]);
var M019 = new SpotsInfo('M','019',true,[0,0]);
var M01A = new SpotsInfo('M','01A',true,[0,0]);
var M01B = new SpotsInfo('M','01B',true,[0,0]);
var M01C = new SpotsInfo('M','01C',true,[0,0]);
var M01D = new SpotsInfo('M','01D',true,[0,0]);
var M01E = new SpotsInfo('M','01E',true,[0,0]);
var M01F = new SpotsInfo('M','01F',true,[0,0]);
var M020 = new SpotsInfo('M','020',true,[0,0]);
var M021 = new SpotsInfo('M','021',true,[0,0]);
var M022 = new SpotsInfo('M','022',true,[0,0]);
var M023 = new SpotsInfo('M','023',true,[0,0]);
var M024 = new SpotsInfo('M','024',true,[0,0]);
var M025 = new SpotsInfo('M','025',true,[0,0]);
var M026 = new SpotsInfo('M','026',true,[0,0]);
var M027 = new SpotsInfo('M','027',true,[0,0]);
var M028 = new SpotsInfo('M','028',true,[0,0]);
var M029 = new SpotsInfo('M','029',true,[0,0]);
var M02A = new SpotsInfo('M','02A',true,[0,0]);
var M02B = new SpotsInfo('M','02B',true,[0,0]);
var M02C = new SpotsInfo('M','02C',true,[0,0]);
var M02D = new SpotsInfo('M','02D',true,[0,0]);
var M02E = new SpotsInfo('M','02E',true,[0,0]);
var M02F = new SpotsInfo('M','02F',true,[0,0]);
var M030 = new SpotsInfo('M','030',true,[0,0]);
var M031 = new SpotsInfo('M','031',true,[0,0]);
var M032 = new SpotsInfo('M','032',true,[0,0]);
var M033 = new SpotsInfo('M','033',true,[0,0]);
var M034 = new SpotsInfo('M','034',true,[0,0]);
var M035 = new SpotsInfo('M','035',true,[0,0]);
var M036 = new SpotsInfo('M','036',true,[0,0]);
var M037 = new SpotsInfo('M','037',true,[0,0]);
var M038 = new SpotsInfo('M','038',true,[0,0]);
var M039 = new SpotsInfo('M','039',true,[0,0]);
var M03A = new SpotsInfo('M','03A',true,[0,0]);
var M03B = new SpotsInfo('M','03B',true,[0,0]);
var M03C = new SpotsInfo('M','03C',true,[0,0]);
var M03D = new SpotsInfo('M','03D',true,[0,0]);
var M03E = new SpotsInfo('M','03E',true,[0,0]);
var M03F = new SpotsInfo('M','03F',true,[0,0]);
var M040 = new SpotsInfo('M','040',true,[0,0]);
var M041 = new SpotsInfo('M','041',true,[0,0]);
var M042 = new SpotsInfo('M','042',true,[0,0]);
var M043 = new SpotsInfo('M','043',true,[0,0]);
var M044 = new SpotsInfo('M','044',true,[0,0]);
var M045 = new SpotsInfo('M','045',true,[0,0]);
var M046 = new SpotsInfo('M','046',true,[0,0]);
var M047 = new SpotsInfo('M','047',true,[0,0]);
var M048 = new SpotsInfo('M','048',true,[0,0]);
var M049 = new SpotsInfo('M','049',true,[0,0]);
var M04A = new SpotsInfo('M','04A',true,[0,0]);
var M04B = new SpotsInfo('M','04B',true,[0,0]);
var M04C = new SpotsInfo('M','04C',true,[0,0]);
var M04D = new SpotsInfo('M','04D',true,[0,0]);
var M04E = new SpotsInfo('M','04E',true,[0,0]);
var M04F = new SpotsInfo('M','04F',true,[0,0]);
var M050 = new SpotsInfo('M','050',true,[0,0]);
var M051 = new SpotsInfo('M','051',true,[0,0]);
var M052 = new SpotsInfo('M','052',true,[0,0]);
var M053 = new SpotsInfo('M','053',true,[0,0]);
var M054 = new SpotsInfo('M','054',true,[0,0]);
var M055 = new SpotsInfo('M','055',true,[0,0]);
var M056 = new SpotsInfo('M','056',true,[0,0]);
var M057 = new SpotsInfo('M','057',true,[0,0]);
var M058 = new SpotsInfo('M','058',true,[0,0]);
var M059 = new SpotsInfo('M','059',true,[0,0]);
var M05A = new SpotsInfo('M','05A',true,[0,0]);
var M05B = new SpotsInfo('M','05B',true,[0,0]);
var M05C = new SpotsInfo('M','05C',true,[0,0]);
var M05D = new SpotsInfo('M','05D',true,[0,0]);
var M05E = new SpotsInfo('M','05E',true,[0,0]);
var M05F = new SpotsInfo('M','05F',true,[0,0]);
var M060 = new SpotsInfo('M','060',true,[0,0]);
var M061 = new SpotsInfo('M','061',true,[0,0]);
var M062 = new SpotsInfo('M','062',true,[0,0]);
var M063 = new SpotsInfo('M','063',true,[0,0]);
var M064 = new SpotsInfo('M','064',true,[0,0]);
var M065 = new SpotsInfo('M','065',true,[0,0]);
var M066 = new SpotsInfo('M','066',true,[0,0]);
var M067 = new SpotsInfo('M','067',true,[0,0]);
var M068 = new SpotsInfo('M','068',true,[0,0]);
var M069 = new SpotsInfo('M','069',true,[0,0]);
var M06A = new SpotsInfo('M','06A',true,[0,0]);
var M06B = new SpotsInfo('M','06B',true,[0,0]);
var M06C = new SpotsInfo('M','06C',true,[0,0]);
var M06D = new SpotsInfo('M','06D',true,[0,0]);
var M06E = new SpotsInfo('M','06E',true,[0,0]);
var M06F = new SpotsInfo('M','06F',true,[0,0]);
var M070 = new SpotsInfo('M','070',true,[0,0]);
var M071 = new SpotsInfo('M','071',true,[0,0]);
var M072 = new SpotsInfo('M','072',true,[0,0]);
var M073 = new SpotsInfo('M','073',true,[0,0]);
var M074 = new SpotsInfo('M','074',true,[0,0]);
var M075 = new SpotsInfo('M','075',true,[0,0]);
var M076 = new SpotsInfo('M','076',true,[0,0]);
var M077 = new SpotsInfo('M','077',true,[0,0]);
var M078 = new SpotsInfo('M','078',true,[0,0]);
var M079 = new SpotsInfo('M','079',true,[0,0]);
var M07A = new SpotsInfo('M','07A',true,[0,0]);
var M07B = new SpotsInfo('M','07B',true,[0,0]);
var M07C = new SpotsInfo('M','07C',true,[0,0]);
var M07D = new SpotsInfo('M','07D',true,[0,0]);
var M07E = new SpotsInfo('M','07E',true,[0,0]);
var M07F = new SpotsInfo('M','07F',true,[0,0]);
var M080 = new SpotsInfo('M','080',true,[0,0]);
var M081 = new SpotsInfo('M','081',true,[0,0]);
var M082 = new SpotsInfo('M','082',true,[0,0]);
var M083 = new SpotsInfo('M','083',true,[0,0]);
var M084 = new SpotsInfo('M','084',true,[0,0]);
var M085 = new SpotsInfo('M','085',true,[0,0]);
var M086 = new SpotsInfo('M','086',true,[0,0]);
var M087 = new SpotsInfo('M','087',true,[0,0]);
var M088 = new SpotsInfo('M','088',true,[0,0]);
var M089 = new SpotsInfo('M','089',true,[0,0]);
var M08A = new SpotsInfo('M','08A',true,[0,0]);
var M08B = new SpotsInfo('M','08B',true,[0,0]);
var M08C = new SpotsInfo('M','08C',true,[0,0]);
var M08D = new SpotsInfo('M','08D',true,[0,0]);
var M08E = new SpotsInfo('M','08E',true,[0,0]);
var M08F = new SpotsInfo('M','08F',true,[0,0]);
var M090 = new SpotsInfo('M','090',true,[0,0]);
var M091 = new SpotsInfo('M','091',true,[0,0]);
var M092 = new SpotsInfo('M','092',true,[0,0]);
var M093 = new SpotsInfo('M','093',true,[0,0]);
var lotMSpots = [M001,M002,M003,M004,M005,M006,M007,M008,M009,M00A
				,M00B,M00C,M00D,M00E,M00F,M010,M011,M012,M013,M014
				,M015,M016,M017,M018,M019,M01A,M01B,M01C,M01D,M01E
				,M01F,M020,M021,M022,M023,M024,M025,M026,M027,M028
				,M029,M02A,M02B,M02C,M02D,M02E,M02F,M030,M031,M032
				,M033,M034,M035,M036,M037,M038,M039,M03A,M03B,M03C
				,M03D,M03E,M03F,M040,M041,M042,M043,M044,M045,M046
				,M047,M048,M049,M04A,M04B,M04C,M04D,M04E,M04F,M050
				,M051,M052,M053,M054,M055,M056,M057,M058,M059,M05A
				,M05B,M05C,M05D,M05E,M05F,M060,M061,M062,M063,M064
				,M065,M066,M067,M068,M069,M06A,M06B,M06C,M06D,M06E
				,M06F,M070,M071,M072,M073,M074,M075,M076,M077,M078
				,M079,M07A,M07B,M07C,M07D,M07E,M07F,M080,M081,M082
				,M083,M084,M085,M086,M087,M088,M089,M08A,M08B,M08C
				,M08D,M08E,M08F,M090,M091,M092,M093];

//Lot N - - - - - - - - - - - - - - - - - - - - - - - - -
var N001 = new SpotsInfo('N','001',true,[0,0]);
var N002 = new SpotsInfo('N','002',true,[0,0]);
var N003 = new SpotsInfo('N','003',true,[0,0]);
var N004 = new SpotsInfo('N','004',true,[0,0]);
var N005 = new SpotsInfo('N','005',true,[0,0]);
var N006 = new SpotsInfo('N','006',true,[0,0]);
var N007 = new SpotsInfo('N','007',true,[0,0]);
var N008 = new SpotsInfo('N','008',true,[0,0]);
var N009 = new SpotsInfo('N','009',true,[0,0]);
var N00A = new SpotsInfo('N','00A',true,[0,0]);
var N00B = new SpotsInfo('N','00B',true,[0,0]);
var N00C = new SpotsInfo('N','00C',true,[0,0]);
var N00D = new SpotsInfo('N','00D',true,[0,0]);
var N00E = new SpotsInfo('N','00E',true,[0,0]);
var N00F = new SpotsInfo('N','00F',true,[0,0]);
var N010 = new SpotsInfo('N','010',true,[0,0]);
var N011 = new SpotsInfo('N','011',true,[0,0]);
var N012 = new SpotsInfo('N','012',true,[0,0]);
var N013 = new SpotsInfo('N','013',true,[0,0]);
var N014 = new SpotsInfo('N','014',true,[0,0]);
var N015 = new SpotsInfo('N','015',true,[0,0]);
var N016 = new SpotsInfo('N','016',true,[0,0]);
var N017 = new SpotsInfo('N','017',true,[0,0]);
var N018 = new SpotsInfo('N','018',true,[0,0]);
var N019 = new SpotsInfo('N','019',true,[0,0]);
var N01A = new SpotsInfo('N','01A',true,[0,0]);
var N01B = new SpotsInfo('N','01B',true,[0,0]);
var N01C = new SpotsInfo('N','01C',true,[0,0]);
var N01D = new SpotsInfo('N','01D',true,[0,0]);
var N01E = new SpotsInfo('N','01E',true,[0,0]);
var N01F = new SpotsInfo('N','01F',true,[0,0]);
var N020 = new SpotsInfo('N','020',true,[0,0]);
var N021 = new SpotsInfo('N','021',true,[0,0]);
var N022 = new SpotsInfo('N','022',true,[0,0]);
var N023 = new SpotsInfo('N','023',true,[0,0]);
var N024 = new SpotsInfo('N','024',true,[0,0]);
var N025 = new SpotsInfo('N','025',true,[0,0]);
var N026 = new SpotsInfo('N','026',true,[0,0]);
var N027 = new SpotsInfo('N','027',true,[0,0]);
var N028 = new SpotsInfo('N','028',true,[0,0]);
var N029 = new SpotsInfo('N','029',true,[0,0]);
var N02A = new SpotsInfo('N','02A',true,[0,0]);
var N02B = new SpotsInfo('N','02B',true,[0,0]);
var N02C = new SpotsInfo('N','02C',true,[0,0]);
var N02D = new SpotsInfo('N','02D',true,[0,0]);
var N02E = new SpotsInfo('N','02E',true,[0,0]);
var N02F = new SpotsInfo('N','02F',true,[0,0]);
var N030 = new SpotsInfo('N','030',true,[0,0]);
var N031 = new SpotsInfo('N','031',true,[0,0]);
var N032 = new SpotsInfo('N','032',true,[0,0]);
var N033 = new SpotsInfo('N','033',true,[0,0]);
var N034 = new SpotsInfo('N','034',true,[0,0]);
var N035 = new SpotsInfo('N','035',true,[0,0]);
var N036 = new SpotsInfo('N','036',true,[0,0]);
var N037 = new SpotsInfo('N','037',true,[0,0]);
var N038 = new SpotsInfo('N','038',true,[0,0]);
var N039 = new SpotsInfo('N','039',true,[0,0]);
var N03A = new SpotsInfo('N','03A',true,[0,0]);
var N03B = new SpotsInfo('N','03B',true,[0,0]);
var N03C = new SpotsInfo('N','03C',true,[0,0]);
var N03D = new SpotsInfo('N','03D',true,[0,0]);
var N03E = new SpotsInfo('N','03E',true,[0,0]);
var lotNSpots = [N001,N002,N003,N004,N005,N006,N007,N008,N009,N00A
				,N00B,N00C,N00D,N00E,N00F,N010,N011,N012,N013,N014
				,N015,N016,N017,N018,N019,N01A,N01B,N01C,N01D,N01E
				,N01F,N020,N021,N022,N023,N024,N025,N026,N027,N028
				,N029,N02A,N02B,N02C,N02D,N02E,N02F,N030,N031,N032
				,N033,N034,N035,N036,N037,N038,N039,N03A,N03B,N03C
				,N03D,N03E];

//Lot P - - - - - - - - - - - - - - - - - - - - - - - - -
var P001 = new SpotsInfo('P','001',true,[0,0]);
var P002 = new SpotsInfo('P','002',true,[0,0]);
var P003 = new SpotsInfo('P','003',true,[0,0]);
var P004 = new SpotsInfo('P','004',true,[0,0]);
var P005 = new SpotsInfo('P','005',true,[0,0]);
var P006 = new SpotsInfo('P','006',true,[0,0]);
var P007 = new SpotsInfo('P','007',true,[0,0]);
var P008 = new SpotsInfo('P','008',true,[0,0]);
var P009 = new SpotsInfo('P','009',true,[0,0]);
var P00A = new SpotsInfo('P','00A',true,[0,0]);
var P00B = new SpotsInfo('P','00B',true,[0,0]);
var P00C = new SpotsInfo('P','00C',true,[0,0]);
var P00D = new SpotsInfo('P','00D',true,[0,0]);
var P00E = new SpotsInfo('P','00E',true,[0,0]);
var P00F = new SpotsInfo('P','00F',true,[0,0]);
var P010 = new SpotsInfo('P','010',true,[0,0]);
var P011 = new SpotsInfo('P','011',true,[0,0]);
var P012 = new SpotsInfo('P','012',true,[0,0]);
var P013 = new SpotsInfo('P','013',true,[0,0]);
var P014 = new SpotsInfo('P','014',true,[0,0]);
var P015 = new SpotsInfo('P','015',true,[0,0]);
var P016 = new SpotsInfo('P','016',true,[0,0]);
var P017 = new SpotsInfo('P','017',true,[0,0]);
var P018 = new SpotsInfo('P','018',true,[0,0]);
var lotPSpots = [P001,P002,P003,P004,P005,P006,P007,P008,P009,P00A
				,P00B,P00C,P00D,P00E,P00F,P010,P011,P012,P013,P014
				,P015,P016,P017,P018];

//Lot R - - - - - - - - - - - - - - - - - - - - - - - - -
var R001 = new SpotsInfo('R','001',true,[0,0]);
var R002 = new SpotsInfo('R','002',true,[0,0]);
var R003 = new SpotsInfo('R','003',true,[0,0]);
var R004 = new SpotsInfo('R','004',true,[0,0]);
var R005 = new SpotsInfo('R','005',true,[0,0]);
var R006 = new SpotsInfo('R','006',true,[0,0]);
var R007 = new SpotsInfo('R','007',true,[0,0]);
var R008 = new SpotsInfo('R','008',true,[0,0]);
var R009 = new SpotsInfo('R','009',true,[0,0]);
var R00A = new SpotsInfo('R','00A',true,[0,0]);
var R00B = new SpotsInfo('R','00B',true,[0,0]);
var R00C = new SpotsInfo('R','00C',true,[0,0]);
var R00D = new SpotsInfo('R','00D',true,[0,0]);
var R00E = new SpotsInfo('R','00E',true,[0,0]);
var R00F = new SpotsInfo('R','00F',true,[0,0]);
var R010 = new SpotsInfo('R','010',true,[0,0]);
var R011 = new SpotsInfo('R','011',true,[0,0]);
var R012 = new SpotsInfo('R','012',true,[0,0]);
var R013 = new SpotsInfo('R','013',true,[0,0]);
var R014 = new SpotsInfo('R','014',true,[0,0]);
var R015 = new SpotsInfo('R','015',true,[0,0]);
var R016 = new SpotsInfo('R','016',true,[0,0]);
var R017 = new SpotsInfo('R','017',true,[0,0]);
var R018 = new SpotsInfo('R','018',true,[0,0]);
var R019 = new SpotsInfo('R','019',true,[0,0]);
var R01A = new SpotsInfo('R','01A',true,[0,0]);
var R01B = new SpotsInfo('R','01B',true,[0,0]);
var R01C = new SpotsInfo('R','01C',true,[0,0]);
var R01D = new SpotsInfo('R','01D',true,[0,0]);
var R01E = new SpotsInfo('R','01E',true,[0,0]);
var R01F = new SpotsInfo('R','01F',true,[0,0]);
var R020 = new SpotsInfo('R','020',true,[0,0]);
var R021 = new SpotsInfo('R','021',true,[0,0]);
var R022 = new SpotsInfo('R','022',true,[0,0]);
var R023 = new SpotsInfo('R','023',true,[0,0]);
var lotRSpots = [R001,R002,R003,R004,R005,R006,R007,R008,R009,R00A
				,R00B,R00C,R00D,R00E,R00F,R010,R011,R012,R013,R014
				,R015,R016,R017,R018,R019,R01A,R01B,R01C,R01D,R01E
				,R01F,R020,R021,R022,R023];

//Lot S - - - - - - - - - - - - - - - - - - - - - - - - -
var S001 = new SpotsInfo('S','001',true,[0,0]);
var S002 = new SpotsInfo('S','002',true,[0,0]);
var S003 = new SpotsInfo('S','003',true,[0,0]);
var S004 = new SpotsInfo('S','004',true,[0,0]);
var S005 = new SpotsInfo('S','005',true,[0,0]);
var S006 = new SpotsInfo('S','006',true,[0,0]);
var S007 = new SpotsInfo('S','007',true,[0,0]);
var S008 = new SpotsInfo('S','008',true,[0,0]);
var S009 = new SpotsInfo('S','009',true,[0,0]);
var S00A = new SpotsInfo('S','00A',true,[0,0]);
var S00B = new SpotsInfo('S','00B',true,[0,0]);
var S00C = new SpotsInfo('S','00C',true,[0,0]);
var S00D = new SpotsInfo('S','00D',true,[0,0]);
var S00E = new SpotsInfo('S','00E',true,[0,0]);
var S00F = new SpotsInfo('S','00F',true,[0,0]);
var S010 = new SpotsInfo('S','010',true,[0,0]);
var S011 = new SpotsInfo('S','011',true,[0,0]);
var S012 = new SpotsInfo('S','012',true,[0,0]);
var S013 = new SpotsInfo('S','013',true,[0,0]);
var S014 = new SpotsInfo('S','014',true,[0,0]);
var S015 = new SpotsInfo('S','015',true,[0,0]);
var S016 = new SpotsInfo('S','016',true,[0,0]);
var S017 = new SpotsInfo('S','017',true,[0,0]);
var S018 = new SpotsInfo('S','018',true,[0,0]);
var S019 = new SpotsInfo('S','019',true,[0,0]);
var S01A = new SpotsInfo('S','01A',true,[0,0]);
var S01B = new SpotsInfo('S','01B',true,[0,0]);
var S01C = new SpotsInfo('S','01C',true,[0,0]);
var S01D = new SpotsInfo('S','01D',true,[0,0]);
var S01E = new SpotsInfo('S','01E',true,[0,0]);
var S01F = new SpotsInfo('S','01F',true,[0,0]);
var S020 = new SpotsInfo('S','020',true,[0,0]);
var S021 = new SpotsInfo('S','021',true,[0,0]);
var S022 = new SpotsInfo('S','022',true,[0,0]);
var S023 = new SpotsInfo('S','023',true,[0,0]);
var S024 = new SpotsInfo('S','024',true,[0,0]);
var S025 = new SpotsInfo('S','025',true,[0,0]);
var S026 = new SpotsInfo('S','026',true,[0,0]);
var S027 = new SpotsInfo('S','027',true,[0,0]);
var S028 = new SpotsInfo('S','028',true,[0,0]);
var S029 = new SpotsInfo('S','029',true,[0,0]);
var S02A = new SpotsInfo('S','02A',true,[0,0]);
var S02B = new SpotsInfo('S','02B',true,[0,0]);
var lotSSpots = [S001,S002,S003,S004,S005,S006,S007,S008,S009,S00A
				,S00B,S00C,S00D,S00E,S00F,S010,S011,S012,S013,S014
				,S015,S016,S017,S018,S019,S01A,S01B,S01C,S01D,S01E
				,S01F,S020,S021,S022,S023,S024,S025,S026,S027,S028
				,S029,S02A,S02B];

//Lot U - - - - - - - - - - - - - - - - - - - - - - - - -
var U001 = new SpotsInfo('U','001',true,[0,0]);
var U002 = new SpotsInfo('U','002',true,[0,0]);
var U003 = new SpotsInfo('U','003',true,[0,0]);
var U004 = new SpotsInfo('U','004',true,[0,0]);
var U005 = new SpotsInfo('U','005',true,[0,0]);
var U006 = new SpotsInfo('U','006',true,[0,0]);
var U007 = new SpotsInfo('U','007',true,[0,0]);
var U008 = new SpotsInfo('U','008',true,[0,0]);
var U009 = new SpotsInfo('U','009',true,[0,0]);
var U00A = new SpotsInfo('U','00A',true,[0,0]);
var U00B = new SpotsInfo('U','00B',true,[0,0]);
var U00C = new SpotsInfo('U','00C',true,[0,0]);
var U00D = new SpotsInfo('U','00D',true,[0,0]);
var U00E = new SpotsInfo('U','00E',true,[0,0]);
var U00F = new SpotsInfo('U','00F',true,[0,0]);
var U010 = new SpotsInfo('U','010',true,[0,0]);
var U011 = new SpotsInfo('U','011',true,[0,0]);
var U012 = new SpotsInfo('U','012',true,[0,0]);
var U013 = new SpotsInfo('U','013',true,[0,0]);
var U014 = new SpotsInfo('U','014',true,[0,0]);
var U015 = new SpotsInfo('U','015',true,[0,0]);
var U016 = new SpotsInfo('U','016',true,[0,0]);
var U017 = new SpotsInfo('U','017',true,[0,0]);
var U018 = new SpotsInfo('U','018',true,[0,0]);
var U019 = new SpotsInfo('U','019',true,[0,0]);
var U01A = new SpotsInfo('U','01A',true,[0,0]);
var U01B = new SpotsInfo('U','01B',true,[0,0]);
var U01C = new SpotsInfo('U','01C',true,[0,0]);
var U01D = new SpotsInfo('U','01D',true,[0,0]);
var U01E = new SpotsInfo('U','01E',true,[0,0]);
var U01F = new SpotsInfo('U','01F',true,[0,0]);
var U020 = new SpotsInfo('U','020',true,[0,0]);
var U021 = new SpotsInfo('U','021',true,[0,0]);
var U022 = new SpotsInfo('U','022',true,[0,0]);
var U023 = new SpotsInfo('U','023',true,[0,0]);
var U024 = new SpotsInfo('U','024',true,[0,0]);
var U025 = new SpotsInfo('U','025',true,[0,0]);
var U026 = new SpotsInfo('U','026',true,[0,0]);
var U027 = new SpotsInfo('U','027',true,[0,0]);
var U028 = new SpotsInfo('U','028',true,[0,0]);
var U029 = new SpotsInfo('U','029',true,[0,0]);
var U02A = new SpotsInfo('U','02A',true,[0,0]);
var U02B = new SpotsInfo('U','02B',true,[0,0]);
var U02C = new SpotsInfo('U','02C',true,[0,0]);
var U02D = new SpotsInfo('U','02D',true,[0,0]);
var U02E = new SpotsInfo('U','02E',true,[0,0]);
var U02F = new SpotsInfo('U','02F',true,[0,0]);
var U030 = new SpotsInfo('U','030',true,[0,0]);
var U031 = new SpotsInfo('U','031',true,[0,0]);
var U032 = new SpotsInfo('U','032',true,[0,0]);
var U033 = new SpotsInfo('U','033',true,[0,0]);
var U034 = new SpotsInfo('U','034',true,[0,0]);
var U035 = new SpotsInfo('U','035',true,[0,0]);
var U036 = new SpotsInfo('U','036',true,[0,0]);
var U037 = new SpotsInfo('U','037',true,[0,0]);
var U038 = new SpotsInfo('U','038',true,[0,0]);
var U039 = new SpotsInfo('U','039',true,[0,0]);
var U03A = new SpotsInfo('U','03A',true,[0,0]);
var U03B = new SpotsInfo('U','03B',true,[0,0]);
var U03C = new SpotsInfo('U','03C',true,[0,0]);
var U03D = new SpotsInfo('U','03D',true,[0,0]);
var U03E = new SpotsInfo('U','03E',true,[0,0]);
var U03F = new SpotsInfo('U','03F',true,[0,0]);
var U040 = new SpotsInfo('U','040',true,[0,0]);
var U041 = new SpotsInfo('U','041',true,[0,0]);
var U042 = new SpotsInfo('U','042',true,[0,0]);
var U043 = new SpotsInfo('U','043',true,[0,0]);
var U044 = new SpotsInfo('U','044',true,[0,0]);
var U045 = new SpotsInfo('U','045',true,[0,0]);
var U046 = new SpotsInfo('U','046',true,[0,0]);
var U047 = new SpotsInfo('U','047',true,[0,0]);
var U048 = new SpotsInfo('U','048',true,[0,0]);
var U049 = new SpotsInfo('U','049',true,[0,0]);
var U04A = new SpotsInfo('U','04A',true,[0,0]);
var U04B = new SpotsInfo('U','04B',true,[0,0]);
var U04C = new SpotsInfo('U','04C',true,[0,0]);
var U04D = new SpotsInfo('U','04D',true,[0,0]);
var U04E = new SpotsInfo('U','04E',true,[0,0]);
var U04F = new SpotsInfo('U','04F',true,[0,0]);
var U050 = new SpotsInfo('U','050',true,[0,0]);
var U051 = new SpotsInfo('U','051',true,[0,0]);
var U052 = new SpotsInfo('U','052',true,[0,0]);
var U053 = new SpotsInfo('U','053',true,[0,0]);
var U054 = new SpotsInfo('U','054',true,[0,0]);
var U055 = new SpotsInfo('U','055',true,[0,0]);
var U056 = new SpotsInfo('U','056',true,[0,0]);
var U057 = new SpotsInfo('U','057',true,[0,0]);
var U058 = new SpotsInfo('U','058',true,[0,0]);
var U059 = new SpotsInfo('U','059',true,[0,0]);
var U05A = new SpotsInfo('U','05A',true,[0,0]);
var U05B = new SpotsInfo('U','05B',true,[0,0]);
var U05C = new SpotsInfo('U','05C',true,[0,0]);
var U05D = new SpotsInfo('U','05D',true,[0,0]);
var U05E = new SpotsInfo('U','05E',true,[0,0]);
var U05F = new SpotsInfo('U','05F',true,[0,0]);
var U060 = new SpotsInfo('U','060',true,[0,0]);
var U061 = new SpotsInfo('U','061',true,[0,0]);
var U062 = new SpotsInfo('U','062',true,[0,0]);
var U063 = new SpotsInfo('U','063',true,[0,0]);
var U064 = new SpotsInfo('U','064',true,[0,0]);
var U065 = new SpotsInfo('U','065',true,[0,0]);
var U066 = new SpotsInfo('U','066',true,[0,0]);
var U067 = new SpotsInfo('U','067',true,[0,0]);
var U068 = new SpotsInfo('U','068',true,[0,0]);
var U069 = new SpotsInfo('U','069',true,[0,0]);
var U06A = new SpotsInfo('U','06A',true,[0,0]);
var U06B = new SpotsInfo('U','06B',true,[0,0]);
var U06C = new SpotsInfo('U','06C',true,[0,0]);
var U06D = new SpotsInfo('U','06D',true,[0,0]);
var U06E = new SpotsInfo('U','06E',true,[0,0]);
var U06F = new SpotsInfo('U','06F',true,[0,0]);
var U070 = new SpotsInfo('U','070',true,[0,0]);
var U071 = new SpotsInfo('U','071',true,[0,0]);
var U072 = new SpotsInfo('U','072',true,[0,0]);
var U073 = new SpotsInfo('U','073',true,[0,0]);
var U074 = new SpotsInfo('U','074',true,[0,0]);
var U075 = new SpotsInfo('U','075',true,[0,0]);
var U076 = new SpotsInfo('U','076',true,[0,0]);
var U077 = new SpotsInfo('U','077',true,[0,0]);
var U078 = new SpotsInfo('U','078',true,[0,0]);
var U079 = new SpotsInfo('U','079',true,[0,0]);
var U07A = new SpotsInfo('U','07A',true,[0,0]);
var U07B = new SpotsInfo('U','07B',true,[0,0]);
var U07C = new SpotsInfo('U','07C',true,[0,0]);
var U07D = new SpotsInfo('U','07D',true,[0,0]);
var U07E = new SpotsInfo('U','07E',true,[0,0]);
var U07F = new SpotsInfo('U','07F',true,[0,0]);
var U080 = new SpotsInfo('U','080',true,[0,0]);
var U081 = new SpotsInfo('U','081',true,[0,0]);
var U082 = new SpotsInfo('U','082',true,[0,0]);
var U083 = new SpotsInfo('U','083',true,[0,0]);
var U084 = new SpotsInfo('U','084',true,[0,0]);
var U085 = new SpotsInfo('U','085',true,[0,0]);
var U086 = new SpotsInfo('U','086',true,[0,0]);
var U087 = new SpotsInfo('U','087',true,[0,0]);
var U088 = new SpotsInfo('U','088',true,[0,0]);
var U089 = new SpotsInfo('U','089',true,[0,0]);
var U08A = new SpotsInfo('U','08A',true,[0,0]);
var U08B = new SpotsInfo('U','08B',true,[0,0]);
var U08C = new SpotsInfo('U','08C',true,[0,0]);
var U08D = new SpotsInfo('U','08D',true,[0,0]);
var U08E = new SpotsInfo('U','08E',true,[0,0]);
var U08F = new SpotsInfo('U','08F',true,[0,0]);
var U090 = new SpotsInfo('U','090',true,[0,0]);
var U091 = new SpotsInfo('U','091',true,[0,0]);
var U092 = new SpotsInfo('U','092',true,[0,0]);
var U093 = new SpotsInfo('U','093',true,[0,0]);
var U094 = new SpotsInfo('U','094',true,[0,0]);
var U095 = new SpotsInfo('U','095',true,[0,0]);
var U096 = new SpotsInfo('U','096',true,[0,0]);
var U097 = new SpotsInfo('U','097',true,[0,0]);
var U098 = new SpotsInfo('U','098',true,[0,0]);
var U099 = new SpotsInfo('U','099',true,[0,0]);
var U09A = new SpotsInfo('U','09A',true,[0,0]);
var U09B = new SpotsInfo('U','09B',true,[0,0]);
var U09C = new SpotsInfo('U','09C',true,[0,0]);
var U09D = new SpotsInfo('U','09D',true,[0,0]);
var U09E = new SpotsInfo('U','09E',true,[0,0]);
var U09F = new SpotsInfo('U','09F',true,[0,0]);
var U0A0 = new SpotsInfo('U','0A0',true,[0,0]);
var U0A1 = new SpotsInfo('U','0A1',true,[0,0]);
var U0A2 = new SpotsInfo('U','0A2',true,[0,0]);
var U0A3 = new SpotsInfo('U','0A3',true,[0,0]);
var U0A4 = new SpotsInfo('U','0A4',true,[0,0]);
var U0A5 = new SpotsInfo('U','0A5',true,[0,0]);
var U0A6 = new SpotsInfo('U','0A6',true,[0,0]);
var U0A7 = new SpotsInfo('U','0A7',true,[0,0]);
var U0A8 = new SpotsInfo('U','0A8',true,[0,0]);
var U0A9 = new SpotsInfo('U','0A9',true,[0,0]);
var U0AA = new SpotsInfo('U','0AA',true,[0,0]);
var U0AB = new SpotsInfo('U','0AB',true,[0,0]);
var U0AC = new SpotsInfo('U','0AC',true,[0,0]);
var U0AD = new SpotsInfo('U','0AD',true,[0,0]);
var U0AE = new SpotsInfo('U','0AE',true,[0,0]);
var U0AF = new SpotsInfo('U','0AF',true,[0,0]);
var U0B0 = new SpotsInfo('U','0B0',true,[0,0]);
var U0B1 = new SpotsInfo('U','0B1',true,[0,0]);
var U0B2 = new SpotsInfo('U','0B2',true,[0,0]);
var U0B3 = new SpotsInfo('U','0B3',true,[0,0]);
var U0B4 = new SpotsInfo('U','0B4',true,[0,0]);
var U0B5 = new SpotsInfo('U','0B5',true,[0,0]);
var U0B6 = new SpotsInfo('U','0B6',true,[0,0]);
var U0B7 = new SpotsInfo('U','0B7',true,[0,0]);
var U0B8 = new SpotsInfo('U','0B8',true,[0,0]);
var U0B9 = new SpotsInfo('U','0B9',true,[0,0]);
var U0BA = new SpotsInfo('U','0BA',true,[0,0]);
var U0BB = new SpotsInfo('U','0BB',true,[0,0]);
var U0BC = new SpotsInfo('U','0BC',true,[0,0]);
var U0BD = new SpotsInfo('U','0BD',true,[0,0]);
var U0BE = new SpotsInfo('U','0BE',true,[0,0]);
var U0BF = new SpotsInfo('U','0BF',true,[0,0]);
var U0C0 = new SpotsInfo('U','0C0',true,[0,0]);
var U0C1 = new SpotsInfo('U','0C1',true,[0,0]);
var U0C2 = new SpotsInfo('U','0C2',true,[0,0]);
var U0C3 = new SpotsInfo('U','0C3',true,[0,0]);
var U0C4 = new SpotsInfo('U','0C4',true,[0,0]);
var U0C5 = new SpotsInfo('U','0C5',true,[0,0]);
var U0C6 = new SpotsInfo('U','0C6',true,[0,0]);
var U0C7 = new SpotsInfo('U','0C7',true,[0,0]);
var U0C8 = new SpotsInfo('U','0C8',true,[0,0]);
var U0C9 = new SpotsInfo('U','0C9',true,[0,0]);
var U0CA = new SpotsInfo('U','0CA',true,[0,0]);
var U0CB = new SpotsInfo('U','0CB',true,[0,0]);
var U0CC = new SpotsInfo('U','0CC',true,[0,0]);
var U0CD = new SpotsInfo('U','0CD',true,[0,0]);
var U0CE = new SpotsInfo('U','0CE',true,[0,0]);
var U0CF = new SpotsInfo('U','0CF',true,[0,0]);
var U0D0 = new SpotsInfo('U','0D0',true,[0,0]);
var U0D1 = new SpotsInfo('U','0D1',true,[0,0]);
var U0D2 = new SpotsInfo('U','0D2',true,[0,0]);
var U0D3 = new SpotsInfo('U','0D3',true,[0,0]);
var U0D4 = new SpotsInfo('U','0D4',true,[0,0]);
var U0D5 = new SpotsInfo('U','0D5',true,[0,0]);
var U0D6 = new SpotsInfo('U','0D6',true,[0,0]);
var U0D7 = new SpotsInfo('U','0D7',true,[0,0]);
var U0D8 = new SpotsInfo('U','0D8',true,[0,0]);
var U0D9 = new SpotsInfo('U','0D9',true,[0,0]);
var U0DA = new SpotsInfo('U','0DA',true,[0,0]);
var U0DB = new SpotsInfo('U','0DB',true,[0,0]);
var U0DC = new SpotsInfo('U','0DC',true,[0,0]);
var U0DD = new SpotsInfo('U','0DD',true,[0,0]);
var U0DE = new SpotsInfo('U','0DE',true,[0,0]);
var U0DF = new SpotsInfo('U','0DF',true,[0,0]);
var U0E0 = new SpotsInfo('U','0E0',true,[0,0]);
var U0E1 = new SpotsInfo('U','0E1',true,[0,0]);
var U0E2 = new SpotsInfo('U','0E2',true,[0,0]);
var U0E3 = new SpotsInfo('U','0E3',true,[0,0]);
var U0E4 = new SpotsInfo('U','0E4',true,[0,0]);
var U0E5 = new SpotsInfo('U','0E5',true,[0,0]);
var U0E6 = new SpotsInfo('U','0E6',true,[0,0]);
var U0E7 = new SpotsInfo('U','0E7',true,[0,0]);
var U0E8 = new SpotsInfo('U','0E8',true,[0,0]);
var U0E9 = new SpotsInfo('U','0E9',true,[0,0]);
var U0EA = new SpotsInfo('U','0EA',true,[0,0]);
var U0EB = new SpotsInfo('U','0EB',true,[0,0]);
var U0EC = new SpotsInfo('U','0EC',true,[0,0]);
var U0ED = new SpotsInfo('U','0ED',true,[0,0]);
var U0EE = new SpotsInfo('U','0EE',true,[0,0]);
var U0EF = new SpotsInfo('U','0EF',true,[0,0]);
var U0F0 = new SpotsInfo('U','0F0',true,[0,0]);
var U0F1 = new SpotsInfo('U','0F1',true,[0,0]);
var U0F2 = new SpotsInfo('U','0F2',true,[0,0]);
var U0F3 = new SpotsInfo('U','0F3',true,[0,0]);
var U0F4 = new SpotsInfo('U','0F4',true,[0,0]);
var U0F5 = new SpotsInfo('U','0F5',true,[0,0]);
var U0F6 = new SpotsInfo('U','0F6',true,[0,0]);
var U0F7 = new SpotsInfo('U','0F7',true,[0,0]);
var U0F8 = new SpotsInfo('U','0F8',true,[0,0]);
var U0F9 = new SpotsInfo('U','0F9',true,[0,0]);
var U0FA = new SpotsInfo('U','0FA',true,[0,0]);
var U0FB = new SpotsInfo('U','0FB',true,[0,0]);
var U0FC = new SpotsInfo('U','0FC',true,[0,0]);
var U0FD = new SpotsInfo('U','0FD',true,[0,0]);
var U0FE = new SpotsInfo('U','0FE',true,[0,0]);
var U0FF = new SpotsInfo('U','0FF',true,[0,0]);
var U100 = new SpotsInfo('U','100',true,[0,0]);
var U101 = new SpotsInfo('U','101',true,[0,0]);
var U102 = new SpotsInfo('U','102',true,[0,0]);
var U103 = new SpotsInfo('U','103',true,[0,0]);
var U104 = new SpotsInfo('U','104',true,[0,0]);
var U105 = new SpotsInfo('U','105',true,[0,0]);
var U106 = new SpotsInfo('U','106',true,[0,0]);
var U107 = new SpotsInfo('U','107',true,[0,0]);
var U108 = new SpotsInfo('U','108',true,[0,0]);
var U109 = new SpotsInfo('U','109',true,[0,0]);
var U10A = new SpotsInfo('U','10A',true,[0,0]);
var U10B = new SpotsInfo('U','10B',true,[0,0]);
var U10C = new SpotsInfo('U','10C',true,[0,0]);
var U10D = new SpotsInfo('U','10D',true,[0,0]);
var U10E = new SpotsInfo('U','10E',true,[0,0]);
var U10F = new SpotsInfo('U','10F',true,[0,0]);
var U110 = new SpotsInfo('U','110',true,[0,0]);
var U111 = new SpotsInfo('U','111',true,[0,0]);
var U112 = new SpotsInfo('U','112',true,[0,0]);
var U113 = new SpotsInfo('U','113',true,[0,0]);
var U114 = new SpotsInfo('U','114',true,[0,0]);
var U115 = new SpotsInfo('U','115',true,[0,0]);
var U116 = new SpotsInfo('U','116',true,[0,0]);
var lotUSpots = [U001,U002,U003,U004,U005,U006,U007,U008,U009,U00A
				,U00B,U00C,U00D,U00E,U00F,U010,U011,U012,U013,U014
				,U015,U016,U017,U018,U019,U01A,U01B,U01C,U01D,U01E
				,U01F,U020,U021,U022,U023,U024,U025,U026,U027,U028
				,U029,U02A,U02B,U02C,U02D,U02E,U02F,U030,U031,U032
				,U033,U034,U035,U036,U037,U038,U039,U03A,U03B,U03C
				,U03D,U03E,U03F,U040,U041,U042,U043,U044,U045,U046
				,U047,U048,U049,U04A,U04B,U04C,U04D,U04E,U04F,U050
				,U051,U052,U053,U054,U055,U056,U057,U058,U059,U05A
				,U05B,U05C,U05D,U05E,U05F,U060,U061,U062,U063,U064
				,U065,U066,U067,U068,U069,U06A,U06B,U06C,U06D,U06E
				,U06F,U070,U071,U072,U073,U074,U075,U076,U077,U078
				,U079,U07A,U07B,U07C,U07D,U07E,U07F,U080,U081,U082
				,U083,U084,U085,U086,U087,U088,U089,U08A,U08B,U08C
				,U08D,U08E,U08F,U090,U091,U092,U093,U094,U095,U096
				,U097,U098,U099,U09A,U09B,U09C,U09D,U09E,U09F,U0A0
				,U0A1,U0A2,U0A3,U0A4,U0A5,U0A6,U0A7,U0A8,U0A9,U0AA
				,U0AB,U0AC,U0AD,U0AE,U0AF,U0B0,U0B1,U0B2,U0B3,U0B4
				,U0B5,U0B6,U0B7,U0B8,U0B9,U0BA,U0BB,U0BC,U0BD,U0BE
				,U0BF,U0C0,U0C1,U0C2,U0C3,U0C4,U0C5,U0C6,U0C7,U0C8
				,U0C9,U0CA,U0CB,U0CC,U0CD,U0CE,U0CF,U0D0,U0D1,U0D2
				,U0D3,U0D4,U0D5,U0D6,U0D7,U0D8,U0D9,U0DA,U0DB,U0DC
				,U0DD,U0DE,U0DF,U0E0,U0E1,U0E2,U0E3,U0E4,U0E5,U0E6
				,U0E7,U0E8,U0E9,U0EA,U0EB,U0EC,U0ED,U0EE,U0EF,U0F0
				,U0F1,U0F2,U0F3,U0F4,U0F5,U0F6,U0F7,U0F8,U0F9,U0FA
				,U0FB,U0FC,U0FD,U0FE,U0FF,U100,U101,U102,U103,U104
				,U105,U106,U107,U108,U109,U10A,U10B,U10C,U10D,U10E
				,U10F,U110,U111,U112,U113,U114,U115,U116];

//Lot X - - - - - - - - - - - - - - - - - - - - - - - - -
var X001 = new SpotsInfo('X','001',true,[0,0]);
var X002 = new SpotsInfo('X','002',true,[0,0]);
var lotXSpots = [X001,X002];

//Lot Y - - - - - - - - - - - - - - - - - - - - - - - - -
var Y001 = new SpotsInfo('Y','001',true,[0,0]);
var Y002 = new SpotsInfo('Y','002',true,[0,0]);
var Y003 = new SpotsInfo('Y','003',true,[0,0]);
var Y004 = new SpotsInfo('Y','004',true,[0,0]);
var Y005 = new SpotsInfo('Y','005',true,[0,0]);
var Y006 = new SpotsInfo('Y','006',true,[0,0]);
var Y007 = new SpotsInfo('Y','007',true,[0,0]);
var Y008 = new SpotsInfo('Y','008',true,[0,0]);
var Y009 = new SpotsInfo('Y','009',true,[0,0]);
var Y00A = new SpotsInfo('Y','00A',true,[0,0]);
var Y00B = new SpotsInfo('Y','00B',true,[0,0]);
var Y00C = new SpotsInfo('Y','00C',true,[0,0]);
var Y00D = new SpotsInfo('Y','00D',true,[0,0]);
var Y00E = new SpotsInfo('Y','00E',true,[0,0]);
var Y00F = new SpotsInfo('Y','00F',true,[0,0]);
var Y010 = new SpotsInfo('Y','010',true,[0,0]);
var Y011 = new SpotsInfo('Y','011',true,[0,0]);
var Y012 = new SpotsInfo('Y','012',true,[0,0]);
var Y013 = new SpotsInfo('Y','013',true,[0,0]);
var Y014 = new SpotsInfo('Y','014',true,[0,0]);
var Y015 = new SpotsInfo('Y','015',true,[0,0]);
var Y016 = new SpotsInfo('Y','016',true,[0,0]);
var Y017 = new SpotsInfo('Y','017',true,[0,0]);
var Y018 = new SpotsInfo('Y','018',true,[0,0]);
var Y019 = new SpotsInfo('Y','019',true,[0,0]);
var Y01A = new SpotsInfo('Y','01A',true,[0,0]);
var Y01B = new SpotsInfo('Y','01B',true,[0,0]);
var Y01C = new SpotsInfo('Y','01C',true,[0,0]);
var Y01D = new SpotsInfo('Y','01D',true,[0,0]);
var Y01E = new SpotsInfo('Y','01E',true,[0,0]);
var Y01F = new SpotsInfo('Y','01F',true,[0,0]);
var Y020 = new SpotsInfo('Y','020',true,[0,0]);
var Y021 = new SpotsInfo('Y','021',true,[0,0]);
var Y022 = new SpotsInfo('Y','022',true,[0,0]);
var Y023 = new SpotsInfo('Y','023',true,[0,0]);
var Y024 = new SpotsInfo('Y','024',true,[0,0]);
var Y025 = new SpotsInfo('Y','025',true,[0,0]);
var Y026 = new SpotsInfo('Y','026',true,[0,0]);
var Y027 = new SpotsInfo('Y','027',true,[0,0]);
var Y028 = new SpotsInfo('Y','028',true,[0,0]);
var Y029 = new SpotsInfo('Y','029',true,[0,0]);
var Y02A = new SpotsInfo('Y','02A',true,[0,0]);
var Y02B = new SpotsInfo('Y','02B',true,[0,0]);
var Y02C = new SpotsInfo('Y','02C',true,[0,0]);
var Y02D = new SpotsInfo('Y','02D',true,[0,0]);
var Y02E = new SpotsInfo('Y','02E',true,[0,0]);
var Y02F = new SpotsInfo('Y','02F',true,[0,0]);
var Y030 = new SpotsInfo('Y','030',true,[0,0]);
var Y031 = new SpotsInfo('Y','031',true,[0,0]);
var Y032 = new SpotsInfo('Y','032',true,[0,0]);
var Y033 = new SpotsInfo('Y','033',true,[0,0]);
var Y034 = new SpotsInfo('Y','034',true,[0,0]);
var Y035 = new SpotsInfo('Y','035',true,[0,0]);
var Y036 = new SpotsInfo('Y','036',true,[0,0]);
var Y037 = new SpotsInfo('Y','037',true,[0,0]);
var Y038 = new SpotsInfo('Y','038',true,[0,0]);
var Y039 = new SpotsInfo('Y','039',true,[0,0]);
var Y03A = new SpotsInfo('Y','03A',true,[0,0]);
var Y03B = new SpotsInfo('Y','03B',true,[0,0]);
var Y03C = new SpotsInfo('Y','03C',true,[0,0]);
var Y03D = new SpotsInfo('Y','03D',true,[0,0]);
var Y03E = new SpotsInfo('Y','03E',true,[0,0]);
var lotYSpots = [Y001,Y002,Y003,Y004,Y005,Y006,Y007,Y008,Y009,Y00A
				,Y00B,Y00C,Y00D,Y00E,Y00F,Y010,Y011,Y012,Y013,Y014
				,Y015,Y016,Y017,Y018,Y019,Y01A,Y01B,Y01C,Y01D,Y01E
				,Y01F,Y020,Y021,Y022,Y023,Y024,Y025,Y026,Y027,Y028
				,Y029,Y02A,Y02B,Y02C,Y02D,Y02E,Y02F,Y030,Y031,Y032
				,Y033,Y034,Y035,Y036,Y037,Y038,Y039,Y03A,Y03B,Y03C
				,Y03D,Y03E];

//Lot Z - - - - - - - - - - - - - - - - - - - - - - - - -
var Z001 = new SpotsInfo('Z','001',true,[0,0]);
var Z002 = new SpotsInfo('Z','002',true,[0,0]);
var Z003 = new SpotsInfo('Z','003',true,[0,0]);
var Z004 = new SpotsInfo('Z','004',true,[0,0]);
var Z005 = new SpotsInfo('Z','005',true,[0,0]);
var Z006 = new SpotsInfo('Z','006',true,[0,0]);
var Z007 = new SpotsInfo('Z','007',true,[0,0]);
var Z008 = new SpotsInfo('Z','008',true,[0,0]);
var Z009 = new SpotsInfo('Z','009',true,[0,0]);
var Z00A = new SpotsInfo('Z','00A',true,[0,0]);
var Z00B = new SpotsInfo('Z','00B',true,[0,0]);
var Z00C = new SpotsInfo('Z','00C',true,[0,0]);
var Z00D = new SpotsInfo('Z','00D',true,[0,0]);
var Z00E = new SpotsInfo('Z','00E',true,[0,0]);
var Z00F = new SpotsInfo('Z','00F',true,[0,0]);
var Z010 = new SpotsInfo('Z','010',true,[0,0]);
var Z011 = new SpotsInfo('Z','011',true,[0,0]);
var Z012 = new SpotsInfo('Z','012',true,[0,0]);
var Z013 = new SpotsInfo('Z','013',true,[0,0]);
var Z014 = new SpotsInfo('Z','014',true,[0,0]);
var Z015 = new SpotsInfo('Z','015',true,[0,0]);
var Z016 = new SpotsInfo('Z','016',true,[0,0]);
var Z017 = new SpotsInfo('Z','017',true,[0,0]);
var Z018 = new SpotsInfo('Z','018',true,[0,0]);
var Z019 = new SpotsInfo('Z','019',true,[0,0]);
var Z01A = new SpotsInfo('Z','01A',true,[0,0]);
var Z01B = new SpotsInfo('Z','01B',true,[0,0]);
var Z01C = new SpotsInfo('Z','01C',true,[0,0]);
var Z01D = new SpotsInfo('Z','01D',true,[0,0]);
var Z01E = new SpotsInfo('Z','01E',true,[0,0]);
var Z01F = new SpotsInfo('Z','01F',true,[0,0]);
var Z020 = new SpotsInfo('Z','020',true,[0,0]);
var Z021 = new SpotsInfo('Z','021',true,[0,0]);
var Z022 = new SpotsInfo('Z','022',true,[0,0]);
var Z023 = new SpotsInfo('Z','023',true,[0,0]);
var Z024 = new SpotsInfo('Z','024',true,[0,0]);
var Z025 = new SpotsInfo('Z','025',true,[0,0]);
var Z026 = new SpotsInfo('Z','026',true,[0,0]);
var Z027 = new SpotsInfo('Z','027',true,[0,0]);
var Z028 = new SpotsInfo('Z','028',true,[0,0]);
var Z029 = new SpotsInfo('Z','029',true,[0,0]);
var Z02A = new SpotsInfo('Z','02A',true,[0,0]);
var Z02B = new SpotsInfo('Z','02B',true,[0,0]);
var Z02C = new SpotsInfo('Z','02C',true,[0,0]);
var Z02D = new SpotsInfo('Z','02D',true,[0,0]);
var Z02E = new SpotsInfo('Z','02E',true,[0,0]);
var Z02F = new SpotsInfo('Z','02F',true,[0,0]);
var Z030 = new SpotsInfo('Z','030',true,[0,0]);
var Z031 = new SpotsInfo('Z','031',true,[0,0]);
var Z032 = new SpotsInfo('Z','032',true,[0,0]);
var Z033 = new SpotsInfo('Z','033',true,[0,0]);
var Z034 = new SpotsInfo('Z','034',true,[0,0]);
var Z035 = new SpotsInfo('Z','035',true,[0,0]);
var Z036 = new SpotsInfo('Z','036',true,[0,0]);
var Z037 = new SpotsInfo('Z','037',true,[0,0]);
var Z038 = new SpotsInfo('Z','038',true,[0,0]);
var Z039 = new SpotsInfo('Z','039',true,[0,0]);
var Z03A = new SpotsInfo('Z','03A',true,[0,0]);
var Z03B = new SpotsInfo('Z','03B',true,[0,0]);
var Z03C = new SpotsInfo('Z','03C',true,[0,0]);
var Z03D = new SpotsInfo('Z','03D',true,[0,0]);
var Z03E = new SpotsInfo('Z','03E',true,[0,0]);
var Z03F = new SpotsInfo('Z','03F',true,[0,0]);
var Z040 = new SpotsInfo('Z','040',true,[0,0]);
var Z041 = new SpotsInfo('Z','041',true,[0,0]);
var Z042 = new SpotsInfo('Z','042',true,[0,0]);
var Z043 = new SpotsInfo('Z','043',true,[0,0]);
var Z044 = new SpotsInfo('Z','044',true,[0,0]);
var Z045 = new SpotsInfo('Z','045',true,[0,0]);
var Z046 = new SpotsInfo('Z','046',true,[0,0]);
var Z047 = new SpotsInfo('Z','047',true,[0,0]);
var Z048 = new SpotsInfo('Z','048',true,[0,0]);
var Z049 = new SpotsInfo('Z','049',true,[0,0]);
var Z04A = new SpotsInfo('Z','04A',true,[0,0]);
var Z04B = new SpotsInfo('Z','04B',true,[0,0]);
var Z04C = new SpotsInfo('Z','04C',true,[0,0]);
var Z04D = new SpotsInfo('Z','04D',true,[0,0]);
var Z04E = new SpotsInfo('Z','04E',true,[0,0]);
var Z04F = new SpotsInfo('Z','04F',true,[0,0]);
var Z050 = new SpotsInfo('Z','050',true,[0,0]);
var Z051 = new SpotsInfo('Z','051',true,[0,0]);
var Z052 = new SpotsInfo('Z','052',true,[0,0]);
var Z053 = new SpotsInfo('Z','053',true,[0,0]);
var Z054 = new SpotsInfo('Z','054',true,[0,0]);
var Z055 = new SpotsInfo('Z','055',true,[0,0]);
var Z056 = new SpotsInfo('Z','056',true,[0,0]);
var Z057 = new SpotsInfo('Z','057',true,[0,0]);
var Z058 = new SpotsInfo('Z','058',true,[0,0]);
var Z059 = new SpotsInfo('Z','059',true,[0,0]);
var Z05A = new SpotsInfo('Z','05A',true,[0,0]);
var Z05B = new SpotsInfo('Z','05B',true,[0,0]);
var Z05C = new SpotsInfo('Z','05C',true,[0,0]);
var Z05D = new SpotsInfo('Z','05D',true,[0,0]);
var Z05E = new SpotsInfo('Z','05E',true,[0,0]);
var Z05F = new SpotsInfo('Z','05F',true,[0,0]);
var Z060 = new SpotsInfo('Z','060',true,[0,0]);
var Z061 = new SpotsInfo('Z','061',true,[0,0]);
var Z062 = new SpotsInfo('Z','062',true,[0,0]);
var Z063 = new SpotsInfo('Z','063',true,[0,0]);
var Z064 = new SpotsInfo('Z','064',true,[0,0]);
var Z065 = new SpotsInfo('Z','065',true,[0,0]);
var Z066 = new SpotsInfo('Z','066',true,[0,0]);
var Z067 = new SpotsInfo('Z','067',true,[0,0]);
var Z068 = new SpotsInfo('Z','068',true,[0,0]);
var Z069 = new SpotsInfo('Z','069',true,[0,0]);
var Z06A = new SpotsInfo('Z','06A',true,[0,0]);
var Z06B = new SpotsInfo('Z','06B',true,[0,0]);
var Z06C = new SpotsInfo('Z','06C',true,[0,0]);
var Z06D = new SpotsInfo('Z','06D',true,[0,0]);
var Z06E = new SpotsInfo('Z','06E',true,[0,0]);
var Z06F = new SpotsInfo('Z','06F',true,[0,0]);
var Z070 = new SpotsInfo('Z','070',true,[0,0]);
var Z071 = new SpotsInfo('Z','071',true,[0,0]);
var Z072 = new SpotsInfo('Z','072',true,[0,0]);
var Z073 = new SpotsInfo('Z','073',true,[0,0]);
var Z074 = new SpotsInfo('Z','074',true,[0,0]);
var Z075 = new SpotsInfo('Z','075',true,[0,0]);
var Z076 = new SpotsInfo('Z','076',true,[0,0]);
var Z077 = new SpotsInfo('Z','077',true,[0,0]);
var Z078 = new SpotsInfo('Z','078',true,[0,0]);
var Z079 = new SpotsInfo('Z','079',true,[0,0]);
var Z07A = new SpotsInfo('Z','07A',true,[0,0]);
var Z07B = new SpotsInfo('Z','07B',true,[0,0]);
var Z07C = new SpotsInfo('Z','07C',true,[0,0]);
var Z07D = new SpotsInfo('Z','07D',true,[0,0]);
var Z07E = new SpotsInfo('Z','07E',true,[0,0]);
var Z07F = new SpotsInfo('Z','07F',true,[0,0]);
var Z080 = new SpotsInfo('Z','080',true,[0,0]);
var Z081 = new SpotsInfo('Z','081',true,[0,0]);
var Z082 = new SpotsInfo('Z','082',true,[0,0]);
var Z083 = new SpotsInfo('Z','083',true,[0,0]);
var Z084 = new SpotsInfo('Z','084',true,[0,0]);
var Z085 = new SpotsInfo('Z','085',true,[0,0]);
var Z086 = new SpotsInfo('Z','086',true,[0,0]);
var Z087 = new SpotsInfo('Z','087',true,[0,0]);
var Z088 = new SpotsInfo('Z','088',true,[0,0]);
var Z089 = new SpotsInfo('Z','089',true,[0,0]);
var Z08A = new SpotsInfo('Z','08A',true,[0,0]);
var Z08B = new SpotsInfo('Z','08B',true,[0,0]);
var Z08C = new SpotsInfo('Z','08C',true,[0,0]);
var Z08D = new SpotsInfo('Z','08D',true,[0,0]);
var Z08E = new SpotsInfo('Z','08E',true,[0,0]);
var Z08F = new SpotsInfo('Z','08F',true,[0,0]);
var Z090 = new SpotsInfo('Z','090',true,[0,0]);
var Z091 = new SpotsInfo('Z','091',true,[0,0]);
var Z092 = new SpotsInfo('Z','092',true,[0,0]);
var Z093 = new SpotsInfo('Z','093',true,[0,0]);
var Z094 = new SpotsInfo('Z','094',true,[0,0]);
var Z095 = new SpotsInfo('Z','095',true,[0,0]);
var Z096 = new SpotsInfo('Z','096',true,[0,0]);
var Z097 = new SpotsInfo('Z','097',true,[0,0]);
var Z098 = new SpotsInfo('Z','098',true,[0,0]);
var Z099 = new SpotsInfo('Z','099',true,[0,0]);
var Z09A = new SpotsInfo('Z','09A',true,[0,0]);
var Z09B = new SpotsInfo('Z','09B',true,[0,0]);
var Z09C = new SpotsInfo('Z','09C',true,[0,0]);
var Z09D = new SpotsInfo('Z','09D',true,[0,0]);
var Z09E = new SpotsInfo('Z','09E',true,[0,0]);
var Z09F = new SpotsInfo('Z','09F',true,[0,0]);
var Z0A0 = new SpotsInfo('Z','0A0',true,[0,0]);
var Z0A1 = new SpotsInfo('Z','0A1',true,[0,0]);
var Z0A2 = new SpotsInfo('Z','0A2',true,[0,0]);
var Z0A3 = new SpotsInfo('Z','0A3',true,[0,0]);
var Z0A4 = new SpotsInfo('Z','0A4',true,[0,0]);
var Z0A5 = new SpotsInfo('Z','0A5',true,[0,0]);
var Z0A6 = new SpotsInfo('Z','0A6',true,[0,0]);
var Z0A7 = new SpotsInfo('Z','0A7',true,[0,0]);
var Z0A8 = new SpotsInfo('Z','0A8',true,[0,0]);
var Z0A9 = new SpotsInfo('Z','0A9',true,[0,0]);
var Z0AA = new SpotsInfo('Z','0AA',true,[0,0]);
var Z0AB = new SpotsInfo('Z','0AB',true,[0,0]);
var Z0AC = new SpotsInfo('Z','0AC',true,[0,0]);
var Z0AD = new SpotsInfo('Z','0AD',true,[0,0]);
var Z0AE = new SpotsInfo('Z','0AE',true,[0,0]);
var Z0AF = new SpotsInfo('Z','0AF',true,[0,0]);
var Z0B0 = new SpotsInfo('Z','0B0',true,[0,0]);
var Z0B1 = new SpotsInfo('Z','0B1',true,[0,0]);
var Z0B2 = new SpotsInfo('Z','0B2',true,[0,0]);
var Z0B3 = new SpotsInfo('Z','0B3',true,[0,0]);
var Z0B4 = new SpotsInfo('Z','0B4',true,[0,0]);
var Z0B5 = new SpotsInfo('Z','0B5',true,[0,0]);
var Z0B6 = new SpotsInfo('Z','0B6',true,[0,0]);
var Z0B7 = new SpotsInfo('Z','0B7',true,[0,0]);
var Z0B8 = new SpotsInfo('Z','0B8',true,[0,0]);
var Z0B9 = new SpotsInfo('Z','0B9',true,[0,0]);
var Z0BA = new SpotsInfo('Z','0BA',true,[0,0]);
var Z0BB = new SpotsInfo('Z','0BB',true,[0,0]);
var Z0BC = new SpotsInfo('Z','0BC',true,[0,0]);
var Z0BD = new SpotsInfo('Z','0BD',true,[0,0]);
var Z0BE = new SpotsInfo('Z','0BE',true,[0,0]);
var Z0BF = new SpotsInfo('Z','0BF',true,[0,0]);
var Z0C0 = new SpotsInfo('Z','0C0',true,[0,0]);
var Z0C1 = new SpotsInfo('Z','0C1',true,[0,0]);
var Z0C2 = new SpotsInfo('Z','0C2',true,[0,0]);
var Z0C3 = new SpotsInfo('Z','0C3',true,[0,0]);
var Z0C4 = new SpotsInfo('Z','0C4',true,[0,0]);
var Z0C5 = new SpotsInfo('Z','0C5',true,[0,0]);
var Z0C6 = new SpotsInfo('Z','0C6',true,[0,0]);
var Z0C7 = new SpotsInfo('Z','0C7',true,[0,0]);
var Z0C8 = new SpotsInfo('Z','0C8',true,[0,0]);
var Z0C9 = new SpotsInfo('Z','0C9',true,[0,0]);
var Z0CA = new SpotsInfo('Z','0CA',true,[0,0]);
var Z0CB = new SpotsInfo('Z','0CB',true,[0,0]);
var Z0CC = new SpotsInfo('Z','0CC',true,[0,0]);
var Z0CD = new SpotsInfo('Z','0CD',true,[0,0]);
var Z0CE = new SpotsInfo('Z','0CE',true,[0,0]);
var Z0CF = new SpotsInfo('Z','0CF',true,[0,0]);
var Z0D0 = new SpotsInfo('Z','0D0',true,[0,0]);
var Z0D1 = new SpotsInfo('Z','0D1',true,[0,0]);
var Z0D2 = new SpotsInfo('Z','0D2',true,[0,0]);
var Z0D3 = new SpotsInfo('Z','0D3',true,[0,0]);
var Z0D4 = new SpotsInfo('Z','0D4',true,[0,0]);
var Z0D5 = new SpotsInfo('Z','0D5',true,[0,0]);
var Z0D6 = new SpotsInfo('Z','0D6',true,[0,0]);
var Z0D7 = new SpotsInfo('Z','0D7',true,[0,0]);
var Z0D8 = new SpotsInfo('Z','0D8',true,[0,0]);
var Z0D9 = new SpotsInfo('Z','0D9',true,[0,0]);
var Z0DA = new SpotsInfo('Z','0DA',true,[0,0]);
var Z0DB = new SpotsInfo('Z','0DB',true,[0,0]);
var Z0DC = new SpotsInfo('Z','0DC',true,[0,0]);
var Z0DD = new SpotsInfo('Z','0DD',true,[0,0]);
var Z0DE = new SpotsInfo('Z','0DE',true,[0,0]);
var Z0DF = new SpotsInfo('Z','0DF',true,[0,0]);
var Z0E0 = new SpotsInfo('Z','0E0',true,[0,0]);
var Z0E1 = new SpotsInfo('Z','0E1',true,[0,0]);
var Z0E2 = new SpotsInfo('Z','0E2',true,[0,0]);
var Z0E3 = new SpotsInfo('Z','0E3',true,[0,0]);
var Z0E4 = new SpotsInfo('Z','0E4',true,[0,0]);
var Z0E5 = new SpotsInfo('Z','0E5',true,[0,0]);
var Z0E6 = new SpotsInfo('Z','0E6',true,[0,0]);
var Z0E7 = new SpotsInfo('Z','0E7',true,[0,0]);
var Z0E8 = new SpotsInfo('Z','0E8',true,[0,0]);
var Z0E9 = new SpotsInfo('Z','0E9',true,[0,0]);
var Z0EA = new SpotsInfo('Z','0EA',true,[0,0]);
var Z0EB = new SpotsInfo('Z','0EB',true,[0,0]);
var Z0EC = new SpotsInfo('Z','0EC',true,[0,0]);
var Z0ED = new SpotsInfo('Z','0ED',true,[0,0]);
var Z0EE = new SpotsInfo('Z','0EE',true,[0,0]);
var Z0EF = new SpotsInfo('Z','0EF',true,[0,0]);
var Z0F0 = new SpotsInfo('Z','0F0',true,[0,0]);
var Z0F1 = new SpotsInfo('Z','0F1',true,[0,0]);
var Z0F2 = new SpotsInfo('Z','0F2',true,[0,0]);
var Z0F3 = new SpotsInfo('Z','0F3',true,[0,0]);
var Z0F4 = new SpotsInfo('Z','0F4',true,[0,0]);
var Z0F5 = new SpotsInfo('Z','0F5',true,[0,0]);
var Z0F6 = new SpotsInfo('Z','0F6',true,[0,0]);
var Z0F7 = new SpotsInfo('Z','0F7',true,[0,0]);
var Z0F8 = new SpotsInfo('Z','0F8',true,[0,0]);
var Z0F9 = new SpotsInfo('Z','0F9',true,[0,0]);
var Z0FA = new SpotsInfo('Z','0FA',true,[0,0]);
var Z0FB = new SpotsInfo('Z','0FB',true,[0,0]);
var Z0FC = new SpotsInfo('Z','0FC',true,[0,0]);
var Z0FD = new SpotsInfo('Z','0FD',true,[0,0]);
var Z0FE = new SpotsInfo('Z','0FE',true,[0,0]);
var Z0FF = new SpotsInfo('Z','0FF',true,[0,0]);
var Z100 = new SpotsInfo('Z','100',true,[0,0]);
var Z101 = new SpotsInfo('Z','101',true,[0,0]);
var Z102 = new SpotsInfo('Z','102',true,[0,0]);
var Z103 = new SpotsInfo('Z','103',true,[0,0]);
var Z104 = new SpotsInfo('Z','104',true,[0,0]);
var Z105 = new SpotsInfo('Z','105',true,[0,0]);
var Z106 = new SpotsInfo('Z','106',true,[0,0]);
var Z107 = new SpotsInfo('Z','107',true,[0,0]);
var Z108 = new SpotsInfo('Z','108',true,[0,0]);
var Z109 = new SpotsInfo('Z','109',true,[0,0]);
var Z10A = new SpotsInfo('Z','10A',true,[0,0]);
var Z10B = new SpotsInfo('Z','10B',true,[0,0]);
var Z10C = new SpotsInfo('Z','10C',true,[0,0]);
var Z10D = new SpotsInfo('Z','10D',true,[0,0]);
var Z10E = new SpotsInfo('Z','10E',true,[0,0]);
var Z10F = new SpotsInfo('Z','10F',true,[0,0]);
var Z110 = new SpotsInfo('Z','110',true,[0,0]);
var Z111 = new SpotsInfo('Z','111',true,[0,0]);
var Z112 = new SpotsInfo('Z','112',true,[0,0]);
var Z113 = new SpotsInfo('Z','113',true,[0,0]);
var Z114 = new SpotsInfo('Z','114',true,[0,0]);
var Z115 = new SpotsInfo('Z','115',true,[0,0]);
var Z116 = new SpotsInfo('Z','116',true,[0,0]);
var Z117 = new SpotsInfo('Z','117',true,[0,0]);
var Z118 = new SpotsInfo('Z','118',true,[0,0]);
var Z119 = new SpotsInfo('Z','119',true,[0,0]);
var Z11A = new SpotsInfo('Z','11A',true,[0,0]);
var Z11B = new SpotsInfo('Z','11B',true,[0,0]);
var Z11C = new SpotsInfo('Z','11C',true,[0,0]);
var Z11D = new SpotsInfo('Z','11D',true,[0,0]);
var Z11E = new SpotsInfo('Z','11E',true,[0,0]);
var Z11F = new SpotsInfo('Z','11F',true,[0,0]);
var Z120 = new SpotsInfo('Z','120',true,[0,0]);
var Z121 = new SpotsInfo('Z','121',true,[0,0]);
var Z122 = new SpotsInfo('Z','122',true,[0,0]);
var Z123 = new SpotsInfo('Z','123',true,[0,0]);
var Z124 = new SpotsInfo('Z','124',true,[0,0]);
var Z125 = new SpotsInfo('Z','125',true,[0,0]);
var Z126 = new SpotsInfo('Z','126',true,[0,0]);
var Z127 = new SpotsInfo('Z','127',true,[0,0]);
var Z128 = new SpotsInfo('Z','128',true,[0,0]);
var Z129 = new SpotsInfo('Z','129',true,[0,0]);
var Z12A = new SpotsInfo('Z','12A',true,[0,0]);
var Z12B = new SpotsInfo('Z','12B',true,[0,0]);
var Z12C = new SpotsInfo('Z','12C',true,[0,0]);
var Z12D = new SpotsInfo('Z','12D',true,[0,0]);
var Z12E = new SpotsInfo('Z','12E',true,[0,0]);
var Z12F = new SpotsInfo('Z','12F',true,[0,0]);
var Z130 = new SpotsInfo('Z','130',true,[0,0]);
var Z131 = new SpotsInfo('Z','131',true,[0,0]);
var Z132 = new SpotsInfo('Z','132',true,[0,0]);
var Z133 = new SpotsInfo('Z','133',true,[0,0]);
var Z134 = new SpotsInfo('Z','134',true,[0,0]);
var Z135 = new SpotsInfo('Z','135',true,[0,0]);
var Z136 = new SpotsInfo('Z','136',true,[0,0]);
var Z137 = new SpotsInfo('Z','137',true,[0,0]);
var Z138 = new SpotsInfo('Z','138',true,[0,0]);
var Z139 = new SpotsInfo('Z','139',true,[0,0]);
var Z13A = new SpotsInfo('Z','13A',true,[0,0]);
var Z13B = new SpotsInfo('Z','13B',true,[0,0]);
var Z13C = new SpotsInfo('Z','13C',true,[0,0]);
var Z13D = new SpotsInfo('Z','13D',true,[0,0]);
var Z13E = new SpotsInfo('Z','13E',true,[0,0]);
var Z13F = new SpotsInfo('Z','13F',true,[0,0]);
var Z140 = new SpotsInfo('Z','140',true,[0,0]);
var Z141 = new SpotsInfo('Z','141',true,[0,0]);
var Z142 = new SpotsInfo('Z','142',true,[0,0]);
var Z143 = new SpotsInfo('Z','143',true,[0,0]);
var Z144 = new SpotsInfo('Z','144',true,[0,0]);
var Z145 = new SpotsInfo('Z','145',true,[0,0]);
var Z146 = new SpotsInfo('Z','146',true,[0,0]);
var Z147 = new SpotsInfo('Z','147',true,[0,0]);
var Z148 = new SpotsInfo('Z','148',true,[0,0]);
var Z149 = new SpotsInfo('Z','149',true,[0,0]);
var Z14A = new SpotsInfo('Z','14A',true,[0,0]);
var Z14B = new SpotsInfo('Z','14B',true,[0,0]);
var Z14C = new SpotsInfo('Z','14C',true,[0,0]);
var Z14D = new SpotsInfo('Z','14D',true,[0,0]);
var Z14E = new SpotsInfo('Z','14E',true,[0,0]);
var Z14F = new SpotsInfo('Z','14F',true,[0,0]);
var Z150 = new SpotsInfo('Z','150',true,[0,0]);
var Z151 = new SpotsInfo('Z','151',true,[0,0]);
var Z152 = new SpotsInfo('Z','152',true,[0,0]);
var Z153 = new SpotsInfo('Z','153',true,[0,0]);
var Z154 = new SpotsInfo('Z','154',true,[0,0]);
var Z155 = new SpotsInfo('Z','155',true,[0,0]);
var Z156 = new SpotsInfo('Z','156',true,[0,0]);
var Z157 = new SpotsInfo('Z','157',true,[0,0]);
var Z158 = new SpotsInfo('Z','158',true,[0,0]);
var Z159 = new SpotsInfo('Z','159',true,[0,0]);
var Z15A = new SpotsInfo('Z','15A',true,[0,0]);
var Z15B = new SpotsInfo('Z','15B',true,[0,0]);
var Z15C = new SpotsInfo('Z','15C',true,[0,0]);
var Z15D = new SpotsInfo('Z','15D',true,[0,0]);
var Z15E = new SpotsInfo('Z','15E',true,[0,0]);
var Z15F = new SpotsInfo('Z','15F',true,[0,0]);
var Z160 = new SpotsInfo('Z','160',true,[0,0]);
var Z161 = new SpotsInfo('Z','161',true,[0,0]);
var Z162 = new SpotsInfo('Z','162',true,[0,0]);
var Z163 = new SpotsInfo('Z','163',true,[0,0]);
var Z164 = new SpotsInfo('Z','164',true,[0,0]);
var Z165 = new SpotsInfo('Z','165',true,[0,0]);
var Z166 = new SpotsInfo('Z','166',true,[0,0]);
var Z167 = new SpotsInfo('Z','167',true,[0,0]);
var Z168 = new SpotsInfo('Z','168',true,[0,0]);
var Z169 = new SpotsInfo('Z','169',true,[0,0]);
var Z16A = new SpotsInfo('Z','16A',true,[0,0]);
var Z16B = new SpotsInfo('Z','16B',true,[0,0]);
var Z16C = new SpotsInfo('Z','16C',true,[0,0]);
var Z16D = new SpotsInfo('Z','16D',true,[0,0]);
var Z16E = new SpotsInfo('Z','16E',true,[0,0]);
var Z16F = new SpotsInfo('Z','16F',true,[0,0]);
var Z170 = new SpotsInfo('Z','170',true,[0,0]);
var Z171 = new SpotsInfo('Z','171',true,[0,0]);
var Z172 = new SpotsInfo('Z','172',true,[0,0]);
var Z173 = new SpotsInfo('Z','173',true,[0,0]);
var Z174 = new SpotsInfo('Z','174',true,[0,0]);
var Z175 = new SpotsInfo('Z','175',true,[0,0]);
var Z176 = new SpotsInfo('Z','176',true,[0,0]);
var Z177 = new SpotsInfo('Z','177',true,[0,0]);
var Z178 = new SpotsInfo('Z','178',true,[0,0]);
var Z179 = new SpotsInfo('Z','179',true,[0,0]);
var Z17A = new SpotsInfo('Z','17A',true,[0,0]);
var Z17B = new SpotsInfo('Z','17B',true,[0,0]);
var Z17C = new SpotsInfo('Z','17C',true,[0,0]);
var Z17D = new SpotsInfo('Z','17D',true,[0,0]);
var Z17E = new SpotsInfo('Z','17E',true,[0,0]);
var Z17F = new SpotsInfo('Z','17F',true,[0,0]);
var Z180 = new SpotsInfo('Z','180',true,[0,0]);
var Z181 = new SpotsInfo('Z','181',true,[0,0]);
var Z182 = new SpotsInfo('Z','182',true,[0,0]);
var Z183 = new SpotsInfo('Z','183',true,[0,0]);
var Z184 = new SpotsInfo('Z','184',true,[0,0]);
var Z185 = new SpotsInfo('Z','185',true,[0,0]);
var Z186 = new SpotsInfo('Z','186',true,[0,0]);
var Z187 = new SpotsInfo('Z','187',true,[0,0]);
var Z188 = new SpotsInfo('Z','188',true,[0,0]);
var Z189 = new SpotsInfo('Z','189',true,[0,0]);
var Z18A = new SpotsInfo('Z','18A',true,[0,0]);
var Z18B = new SpotsInfo('Z','18B',true,[0,0]);
var Z18C = new SpotsInfo('Z','18C',true,[0,0]);
var Z18D = new SpotsInfo('Z','18D',true,[0,0]);
var Z18E = new SpotsInfo('Z','18E',true,[0,0]);
var Z18F = new SpotsInfo('Z','18F',true,[0,0]);
var Z190 = new SpotsInfo('Z','190',true,[0,0]);
var Z191 = new SpotsInfo('Z','191',true,[0,0]);
var Z192 = new SpotsInfo('Z','192',true,[0,0]);
var Z193 = new SpotsInfo('Z','193',true,[0,0]);
var Z194 = new SpotsInfo('Z','194',true,[0,0]);
var Z195 = new SpotsInfo('Z','195',true,[0,0]);
var Z196 = new SpotsInfo('Z','196',true,[0,0]);
var Z197 = new SpotsInfo('Z','197',true,[0,0]);
var Z198 = new SpotsInfo('Z','198',true,[0,0]);
var Z199 = new SpotsInfo('Z','199',true,[0,0]);
var Z19A = new SpotsInfo('Z','19A',true,[0,0]);
var Z19B = new SpotsInfo('Z','19B',true,[0,0]);
var Z19C = new SpotsInfo('Z','19C',true,[0,0]);
var Z19D = new SpotsInfo('Z','19D',true,[0,0]);
var Z19E = new SpotsInfo('Z','19E',true,[0,0]);
var Z19F = new SpotsInfo('Z','19F',true,[0,0]);
var Z1A0 = new SpotsInfo('Z','1A0',true,[0,0]);
var Z1A1 = new SpotsInfo('Z','1A1',true,[0,0]);
var Z1A2 = new SpotsInfo('Z','1A2',true,[0,0]);
var lotZSpots = [Z001,Z002,Z003,Z004,Z005,Z006,Z007,Z008,Z009,Z00A
				,Z00B,Z00C,Z00D,Z00E,Z00F,Z010,Z011,Z012,Z013,Z014
				,Z015,Z016,Z017,Z018,Z019,Z01A,Z01B,Z01C,Z01D,Z01E
				,Z01F,Z020,Z021,Z022,Z023,Z024,Z025,Z026,Z027,Z028
				,Z029,Z02A,Z02B,Z02C,Z02D,Z02E,Z02F,Z030,Z031,Z032
				,Z033,Z034,Z035,Z036,Z037,Z038,Z039,Z03A,Z03B,Z03C
				,Z03D,Z03E,Z03F,Z040,Z041,Z042,Z043,Z044,Z045,Z046
				,Z047,Z048,Z049,Z04A,Z04B,Z04C,Z04D,Z04E,Z04F,Z050
				,Z051,Z052,Z053,Z054,Z055,Z056,Z057,Z058,Z059,Z05A
				,Z05B,Z05C,Z05D,Z05E,Z05F,Z060,Z061,Z062,Z063,Z064
				,Z065,Z066,Z067,Z068,Z069,Z06A,Z06B,Z06C,Z06D,Z06E
				,Z06F,Z070,Z071,Z072,Z073,Z074,Z075,Z076,Z077,Z078
				,Z079,Z07A,Z07B,Z07C,Z07D,Z07E,Z07F,Z080,Z081,Z082
				,Z083,Z084,Z085,Z086,Z087,Z088,Z089,Z08A,Z08B,Z08C
				,Z08D,Z08E,Z08F,Z090,Z091,Z092,Z093,Z094,Z095,Z096
				,Z097,Z098,Z099,Z09A,Z09B,Z09C,Z09D,Z09E,Z09F,Z0A0
				,Z0A1,Z0A2,Z0A3,Z0A4,Z0A5,Z0A6,Z0A7,Z0A8,Z0A9,Z0AA
				,Z0AB,Z0AC,Z0AD,Z0AE,Z0AF,Z0B0,Z0B1,Z0B2,Z0B3,Z0B4
				,Z0B5,Z0B6,Z0B7,Z0B8,Z0B9,Z0BA,Z0BB,Z0BC,Z0BD,Z0BE
				,Z0BF,Z0C0,Z0C1,Z0C2,Z0C3,Z0C4,Z0C5,Z0C6,Z0C7,Z0C8
				,Z0C9,Z0CA,Z0CB,Z0CC,Z0CD,Z0CE,Z0CF,Z0D0,Z0D1,Z0D2
				,Z0D3,Z0D4,Z0D5,Z0D6,Z0D7,Z0D8,Z0D9,Z0DA,Z0DB,Z0DC
				,Z0DD,Z0DE,Z0DF,Z0E0,Z0E1,Z0E2,Z0E3,Z0E4,Z0E5,Z0E6
				,Z0E7,Z0E8,Z0E9,Z0EA,Z0EB,Z0EC,Z0ED,Z0EE,Z0EF,Z0F0
				,Z0F1,Z0F2,Z0F3,Z0F4,Z0F5,Z0F6,Z0F7,Z0F8,Z0F9,Z0FA
				,Z0FB,Z0FC,Z0FD,Z0FE,Z0FF,Z100,Z101,Z102,Z103,Z104
				,Z105,Z106,Z107,Z108,Z109,Z10A,Z10B,Z10C,Z10D,Z10E
				,Z10F,Z110,Z111,Z112,Z113,Z114,Z115,Z116,Z117,Z118
				,Z119,Z11A,Z11B,Z11C,Z11D,Z11E,Z11F,Z120,Z121,Z122
				,Z123,Z124,Z125,Z126,Z127,Z128,Z129,Z12A,Z12B,Z12C
				,Z12D,Z12E,Z12F,Z130,Z131,Z132,Z133,Z134,Z135,Z136
				,Z137,Z138,Z139,Z13A,Z13B,Z13C,Z13D,Z13E,Z13F,Z140
				,Z141,Z142,Z143,Z144,Z145,Z146,Z147,Z148,Z149,Z14A
				,Z14B,Z14C,Z14D,Z14E,Z14F,Z150,Z151,Z152,Z153,Z154
				,Z155,Z156,Z157,Z158,Z159,Z15A,Z15B,Z15C,Z15D,Z15E
				,Z15F,Z160,Z161,Z162,Z163,Z164,Z165,Z166,Z167,Z168
				,Z169,Z16A,Z16B,Z16C,Z16D,Z16E,Z16F,Z170,Z171,Z172
				,Z173,Z174,Z175,Z176,Z177,Z178,Z179,Z17A,Z17B,Z17C
				,Z17D,Z17E,Z17F,Z180,Z181,Z182,Z183,Z184,Z185,Z186
				,Z187,Z188,Z189,Z18A,Z18B,Z18C,Z18D,Z18E,Z18F,Z190
				,Z191,Z192,Z193,Z194,Z195,Z196,Z197,Z198,Z199,Z19A
				,Z19B,Z19C,Z19D,Z19E,Z19F,Z1A0,Z1A1,Z1A2];

//Lot AA - - - - - - - - - - - - - - - - - - - - - - - - -
var AA001 = new SpotsInfo('AA','001',true,[0,0]);
var AA002 = new SpotsInfo('AA','002',true,[0,0]);
var AA003 = new SpotsInfo('AA','003',true,[0,0]);
var AA004 = new SpotsInfo('AA','004',true,[0,0]);
var AA005 = new SpotsInfo('AA','005',true,[0,0]);
var AA006 = new SpotsInfo('AA','006',true,[0,0]);
var AA007 = new SpotsInfo('AA','007',true,[0,0]);
var AA008 = new SpotsInfo('AA','008',true,[0,0]);
var AA009 = new SpotsInfo('AA','009',true,[0,0]);
var AA00A = new SpotsInfo('AA','00A',true,[0,0]);
var AA00B = new SpotsInfo('AA','00B',true,[0,0]);
var AA00C = new SpotsInfo('AA','00C',true,[0,0]);
var AA00D = new SpotsInfo('AA','00D',true,[0,0]);
var AA00E = new SpotsInfo('AA','00E',true,[0,0]);
var AA00F = new SpotsInfo('AA','00F',true,[0,0]);
var AA010 = new SpotsInfo('AA','010',true,[0,0]);
var AA011 = new SpotsInfo('AA','011',true,[0,0]);
var AA012 = new SpotsInfo('AA','012',true,[0,0]);
var AA013 = new SpotsInfo('AA','013',true,[0,0]);
var AA014 = new SpotsInfo('AA','014',true,[0,0]);
var AA015 = new SpotsInfo('AA','015',true,[0,0]);
var AA016 = new SpotsInfo('AA','016',true,[0,0]);
var AA017 = new SpotsInfo('AA','017',true,[0,0]);
var AA018 = new SpotsInfo('AA','018',true,[0,0]);
var AA019 = new SpotsInfo('AA','019',true,[0,0]);
var AA01A = new SpotsInfo('AA','01A',true,[0,0]);
var AA01B = new SpotsInfo('AA','01B',true,[0,0]);
var AA01C = new SpotsInfo('AA','01C',true,[0,0]);
var AA01D = new SpotsInfo('AA','01D',true,[0,0]);
var AA01E = new SpotsInfo('AA','01E',true,[0,0]);
var AA01F = new SpotsInfo('AA','01F',true,[0,0]);
var AA020 = new SpotsInfo('AA','020',true,[0,0]);
var AA021 = new SpotsInfo('AA','021',true,[0,0]);
var AA022 = new SpotsInfo('AA','022',true,[0,0]);
var AA023 = new SpotsInfo('AA','023',true,[0,0]);
var AA024 = new SpotsInfo('AA','024',true,[0,0]);
var AA025 = new SpotsInfo('AA','025',true,[0,0]);
var AA026 = new SpotsInfo('AA','026',true,[0,0]);
var AA027 = new SpotsInfo('AA','027',true,[0,0]);
var AA028 = new SpotsInfo('AA','028',true,[0,0]);
var AA029 = new SpotsInfo('AA','029',true,[0,0]);
var AA02A = new SpotsInfo('AA','02A',true,[0,0]);
var AA02B = new SpotsInfo('AA','02B',true,[0,0]);
var AA02C = new SpotsInfo('AA','02C',true,[0,0]);
var AA02D = new SpotsInfo('AA','02D',true,[0,0]);
var AA02E = new SpotsInfo('AA','02E',true,[0,0]);
var AA02F = new SpotsInfo('AA','02F',true,[0,0]);
var AA030 = new SpotsInfo('AA','030',true,[0,0]);
var AA031 = new SpotsInfo('AA','031',true,[0,0]);
var AA032 = new SpotsInfo('AA','032',true,[0,0]);
var lotAASpots = [AA001,AA002,AA003,AA004,AA005,AA006,AA007,AA008,AA009,AA00A
				 ,AA00B,AA00C,AA00D,AA00E,AA00F,AA010,AA011,AA012,AA013,AA014
				 ,AA015,AA016,AA017,AA018,AA019,AA01A,AA01B,AA01C,AA01D,AA01E
				 ,AA01F,AA020,AA021,AA022,AA023,AA024,AA025,AA026,AA027,AA028
				 ,AA029,AA02A,AA02B,AA02C,AA02D,AA02E,AA02F,AA030,AA031,AA032
				 ];

//Lot BB - - - - - - - - - - - - - - - - - - - - - - - - -
var BB001 = new SpotsInfo('BB','001',true,[0,0]);
var BB002 = new SpotsInfo('BB','002',true,[0,0]);
var BB003 = new SpotsInfo('BB','003',true,[0,0]);
var BB004 = new SpotsInfo('BB','004',true,[0,0]);
var BB005 = new SpotsInfo('BB','005',true,[0,0]);
var BB006 = new SpotsInfo('BB','006',true,[0,0]);
var BB007 = new SpotsInfo('BB','007',true,[0,0]);
var BB008 = new SpotsInfo('BB','008',true,[0,0]);
var BB009 = new SpotsInfo('BB','009',true,[0,0]);
var BB00A = new SpotsInfo('BB','00A',true,[0,0]);
var BB00B = new SpotsInfo('BB','00B',true,[0,0]);
var BB00C = new SpotsInfo('BB','00C',true,[0,0]);
var BB00D = new SpotsInfo('BB','00D',true,[0,0]);
var BB00E = new SpotsInfo('BB','00E',true,[0,0]);
var BB00F = new SpotsInfo('BB','00F',true,[0,0]);
var BB010 = new SpotsInfo('BB','010',true,[0,0]);
var BB011 = new SpotsInfo('BB','011',true,[0,0]);
var BB012 = new SpotsInfo('BB','012',true,[0,0]);
var BB013 = new SpotsInfo('BB','013',true,[0,0]);
var BB014 = new SpotsInfo('BB','014',true,[0,0]);
var BB015 = new SpotsInfo('BB','015',true,[0,0]);
var BB016 = new SpotsInfo('BB','016',true,[0,0]);
var BB017 = new SpotsInfo('BB','017',true,[0,0]);
var BB018 = new SpotsInfo('BB','018',true,[0,0]);
var BB019 = new SpotsInfo('BB','019',true,[0,0]);
var BB01A = new SpotsInfo('BB','01A',true,[0,0]);
var BB01B = new SpotsInfo('BB','01B',true,[0,0]);
var BB01C = new SpotsInfo('BB','01C',true,[0,0]);
var BB01D = new SpotsInfo('BB','01D',true,[0,0]);
var BB01E = new SpotsInfo('BB','01E',true,[0,0]);
var BB01F = new SpotsInfo('BB','01F',true,[0,0]);
var BB020 = new SpotsInfo('BB','020',true,[0,0]);
var BB021 = new SpotsInfo('BB','021',true,[0,0]);
var BB022 = new SpotsInfo('BB','022',true,[0,0]);
var lotBBSpots = [BB001,BB002,BB003,BB004,BB005,BB006,BB007,BB008,BB009,BB00A
				 ,BB00B,BB00C,BB00D,BB00E,BB00F,BB010,BB011,BB012,BB013,BB014
				 ,BB015,BB016,BB017,BB018,BB019,BB01A,BB01B,BB01C,BB01D,BB01E
				 ,BB01F,BB020,BB021,BB022];

//Lot BF - - - - - - - - - - - - - - - - - - - - - - - - -
var BF001 = new SpotsInfo('BF','001',true,[0,0]);
var BF002 = new SpotsInfo('BF','002',true,[0,0]);
var BF003 = new SpotsInfo('BF','003',true,[0,0]);
var BF004 = new SpotsInfo('BF','004',true,[0,0]);
var BF005 = new SpotsInfo('BF','005',true,[0,0]);
var BF006 = new SpotsInfo('BF','006',true,[0,0]);
var BF007 = new SpotsInfo('BF','007',true,[0,0]);
var BF008 = new SpotsInfo('BF','008',true,[0,0]);
var BF009 = new SpotsInfo('BF','009',true,[0,0]);
var BF00A = new SpotsInfo('BF','00A',true,[0,0]);
var BF00B = new SpotsInfo('BF','00B',true,[0,0]);
var BF00C = new SpotsInfo('BF','00C',true,[0,0]);
var BF00D = new SpotsInfo('BF','00D',true,[0,0]);
var BF00E = new SpotsInfo('BF','00E',true,[0,0]);
var BF00F = new SpotsInfo('BF','00F',true,[0,0]);
var BF010 = new SpotsInfo('BF','010',true,[0,0]);
var BF011 = new SpotsInfo('BF','011',true,[0,0]);
var BF012 = new SpotsInfo('BF','012',true,[0,0]);
var BF013 = new SpotsInfo('BF','013',true,[0,0]);
var BF014 = new SpotsInfo('BF','014',true,[0,0]);
var BF015 = new SpotsInfo('BF','015',true,[0,0]);
var BF016 = new SpotsInfo('BF','016',true,[0,0]);
var BF017 = new SpotsInfo('BF','017',true,[0,0]);
var BF018 = new SpotsInfo('BF','018',true,[0,0]);
var BF019 = new SpotsInfo('BF','019',true,[0,0]);
var BF01A = new SpotsInfo('BF','01A',true,[0,0]);
var BF01B = new SpotsInfo('BF','01B',true,[0,0]);
var BF01C = new SpotsInfo('BF','01C',true,[0,0]);
var BF01D = new SpotsInfo('BF','01D',true,[0,0]);
var BF01E = new SpotsInfo('BF','01E',true,[0,0]);
var BF01F = new SpotsInfo('BF','01F',true,[0,0]);
var BF020 = new SpotsInfo('BF','020',true,[0,0]);
var BF021 = new SpotsInfo('BF','021',true,[0,0]);
var BF022 = new SpotsInfo('BF','022',true,[0,0]);
var BF023 = new SpotsInfo('BF','023',true,[0,0]);
var BF024 = new SpotsInfo('BF','024',true,[0,0]);
var BF025 = new SpotsInfo('BF','025',true,[0,0]);
var BF026 = new SpotsInfo('BF','026',true,[0,0]);
var BF027 = new SpotsInfo('BF','027',true,[0,0]);
var BF028 = new SpotsInfo('BF','028',true,[0,0]);
var BF029 = new SpotsInfo('BF','029',true,[0,0]);
var BF02A = new SpotsInfo('BF','02A',true,[0,0]);
var BF02B = new SpotsInfo('BF','02B',true,[0,0]);
var BF02C = new SpotsInfo('BF','02C',true,[0,0]);
var BF02D = new SpotsInfo('BF','02D',true,[0,0]);
var BF02E = new SpotsInfo('BF','02E',true,[0,0]);
var BF02F = new SpotsInfo('BF','02F',true,[0,0]);
var BF030 = new SpotsInfo('BF','030',true,[0,0]);
var BF031 = new SpotsInfo('BF','031',true,[0,0]);
var BF032 = new SpotsInfo('BF','032',true,[0,0]);
var BF033 = new SpotsInfo('BF','033',true,[0,0]);
var BF034 = new SpotsInfo('BF','034',true,[0,0]);
var BF035 = new SpotsInfo('BF','035',true,[0,0]);
var BF036 = new SpotsInfo('BF','036',true,[0,0]);
var BF037 = new SpotsInfo('BF','037',true,[0,0]);
var BF038 = new SpotsInfo('BF','038',true,[0,0]);
var BF039 = new SpotsInfo('BF','039',true,[0,0]);
var BF03A = new SpotsInfo('BF','03A',true,[0,0]);
var BF03B = new SpotsInfo('BF','03B',true,[0,0]);
var BF03C = new SpotsInfo('BF','03C',true,[0,0]);
var BF03D = new SpotsInfo('BF','03D',true,[0,0]);
var BF03E = new SpotsInfo('BF','03E',true,[0,0]);
var BF03F = new SpotsInfo('BF','03F',true,[0,0]);
var BF040 = new SpotsInfo('BF','040',true,[0,0]);
var BF041 = new SpotsInfo('BF','041',true,[0,0]);
var BF042 = new SpotsInfo('BF','042',true,[0,0]);
var BF043 = new SpotsInfo('BF','043',true,[0,0]);
var BF044 = new SpotsInfo('BF','044',true,[0,0]);
var BF045 = new SpotsInfo('BF','045',true,[0,0]);
var BF046 = new SpotsInfo('BF','046',true,[0,0]);
var BF047 = new SpotsInfo('BF','047',true,[0,0]);
var BF048 = new SpotsInfo('BF','048',true,[0,0]);
var BF049 = new SpotsInfo('BF','049',true,[0,0]);
var BF04A = new SpotsInfo('BF','04A',true,[0,0]);
var BF04B = new SpotsInfo('BF','04B',true,[0,0]);
var BF04C = new SpotsInfo('BF','04C',true,[0,0]);
var BF04D = new SpotsInfo('BF','04D',true,[0,0]);
var BF04E = new SpotsInfo('BF','04E',true,[0,0]);
var BF04F = new SpotsInfo('BF','04F',true,[0,0]);
var BF050 = new SpotsInfo('BF','050',true,[0,0]);
var BF051 = new SpotsInfo('BF','051',true,[0,0]);
var BF052 = new SpotsInfo('BF','052',true,[0,0]);
var BF053 = new SpotsInfo('BF','053',true,[0,0]);
var BF054 = new SpotsInfo('BF','054',true,[0,0]);
var BF055 = new SpotsInfo('BF','055',true,[0,0]);
var BF056 = new SpotsInfo('BF','056',true,[0,0]);
var BF057 = new SpotsInfo('BF','057',true,[0,0]);
var BF058 = new SpotsInfo('BF','058',true,[0,0]);
var BF059 = new SpotsInfo('BF','059',true,[0,0]);
var BF05A = new SpotsInfo('BF','05A',true,[0,0]);
var BF05B = new SpotsInfo('BF','05B',true,[0,0]);
var BF05C = new SpotsInfo('BF','05C',true,[0,0]);
var BF05D = new SpotsInfo('BF','05D',true,[0,0]);
var BF05E = new SpotsInfo('BF','05E',true,[0,0]);
var BF05F = new SpotsInfo('BF','05F',true,[0,0]);
var BF060 = new SpotsInfo('BF','060',true,[0,0]);
var BF061 = new SpotsInfo('BF','061',true,[0,0]);
var BF062 = new SpotsInfo('BF','062',true,[0,0]);
var BF063 = new SpotsInfo('BF','063',true,[0,0]);
var BF064 = new SpotsInfo('BF','064',true,[0,0]);
var BF065 = new SpotsInfo('BF','065',true,[0,0]);
var BF066 = new SpotsInfo('BF','066',true,[0,0]);
var BF067 = new SpotsInfo('BF','067',true,[0,0]);
var lotBFSpots = [BF001,BF002,BF003,BF004,BF005,BF006,BF007,BF008,BF009,BF00A
				 ,BF00B,BF00C,BF00D,BF00E,BF00F,BF010,BF011,BF012,BF013,BF014
				 ,BF015,BF016,BF017,BF018,BF019,BF01A,BF01B,BF01C,BF01D,BF01E
				 ,BF01F,BF020,BF021,BF022,BF023,BF024,BF025,BF026,BF027,BF028
				 ,BF029,BF02A,BF02B,BF02C,BF02D,BF02E,BF02F,BF030,BF031,BF032
				 ,BF033,BF034,BF035,BF036,BF037,BF038,BF039,BF03A,BF03B,BF03C
				 ,BF03D,BF03E,BF03F,BF040,BF041,BF042,BF043,BF044,BF045,BF046
				 ,BF047,BF048,BF049,BF04A,BF04B,BF04C,BF04D,BF04E,BF04F,BF050
				 ,BF051,BF052,BF053,BF054,BF055,BF056,BF057,BF058,BF059,BF05A
				 ,BF05B,BF05C,BF05D,BF05E,BF05F,BF060,BF061,BF062,BF063,BF064
				 ,BF065,BF066,BF067];

//Lot BL - - - - - - - - - - - - - - - - - - - - - - - - -
var BL001 = new SpotsInfo('BL','001',true,[0,0]);
var BL002 = new SpotsInfo('BL','002',true,[0,0]);
var BL003 = new SpotsInfo('BL','003',true,[0,0]);
var BL004 = new SpotsInfo('BL','004',true,[0,0]);
var BL005 = new SpotsInfo('BL','005',true,[0,0]);
var BL006 = new SpotsInfo('BL','006',true,[0,0]);
var BL007 = new SpotsInfo('BL','007',true,[0,0]);
var BL008 = new SpotsInfo('BL','008',true,[0,0]);
var BL009 = new SpotsInfo('BL','009',true,[0,0]);
var BL00A = new SpotsInfo('BL','00A',true,[0,0]);
var BL00B = new SpotsInfo('BL','00B',true,[0,0]);
var BL00C = new SpotsInfo('BL','00C',true,[0,0]);
var BL00D = new SpotsInfo('BL','00D',true,[0,0]);
var BL00E = new SpotsInfo('BL','00E',true,[0,0]);
var BL00F = new SpotsInfo('BL','00F',true,[0,0]);
var BL010 = new SpotsInfo('BL','010',true,[0,0]);
var BL011 = new SpotsInfo('BL','011',true,[0,0]);
var BL012 = new SpotsInfo('BL','012',true,[0,0]);
var BL013 = new SpotsInfo('BL','013',true,[0,0]);
var BL014 = new SpotsInfo('BL','014',true,[0,0]);
var BL015 = new SpotsInfo('BL','015',true,[0,0]);
var BL016 = new SpotsInfo('BL','016',true,[0,0]);
var BL017 = new SpotsInfo('BL','017',true,[0,0]);
var BL018 = new SpotsInfo('BL','018',true,[0,0]);
var BL019 = new SpotsInfo('BL','019',true,[0,0]);
var BL01A = new SpotsInfo('BL','01A',true,[0,0]);
var BL01B = new SpotsInfo('BL','01B',true,[0,0]);
var BL01C = new SpotsInfo('BL','01C',true,[0,0]);
var BL01D = new SpotsInfo('BL','01D',true,[0,0]);
var BL01E = new SpotsInfo('BL','01E',true,[0,0]);
var BL01F = new SpotsInfo('BL','01F',true,[0,0]);
var BL020 = new SpotsInfo('BL','020',true,[0,0]);
var BL021 = new SpotsInfo('BL','021',true,[0,0]);
var BL022 = new SpotsInfo('BL','022',true,[0,0]);
var BL023 = new SpotsInfo('BL','023',true,[0,0]);
var BL024 = new SpotsInfo('BL','024',true,[0,0]);
var BL025 = new SpotsInfo('BL','025',true,[0,0]);
var BL026 = new SpotsInfo('BL','026',true,[0,0]);
var BL027 = new SpotsInfo('BL','027',true,[0,0]);
var BL028 = new SpotsInfo('BL','028',true,[0,0]);
var BL029 = new SpotsInfo('BL','029',true,[0,0]);
var BL02A = new SpotsInfo('BL','02A',true,[0,0]);
var BL02B = new SpotsInfo('BL','02B',true,[0,0]);
var BL02C = new SpotsInfo('BL','02C',true,[0,0]);
var BL02D = new SpotsInfo('BL','02D',true,[0,0]);
var BL02E = new SpotsInfo('BL','02E',true,[0,0]);
var BL02F = new SpotsInfo('BL','02F',true,[0,0]);
var BL030 = new SpotsInfo('BL','030',true,[0,0]);
var BL031 = new SpotsInfo('BL','031',true,[0,0]);
var BL032 = new SpotsInfo('BL','032',true,[0,0]);
var BL033 = new SpotsInfo('BL','033',true,[0,0]);
var BL034 = new SpotsInfo('BL','034',true,[0,0]);
var BL035 = new SpotsInfo('BL','035',true,[0,0]);
var BL036 = new SpotsInfo('BL','036',true,[0,0]);
var BL037 = new SpotsInfo('BL','037',true,[0,0]);
var BL038 = new SpotsInfo('BL','038',true,[0,0]);
var BL039 = new SpotsInfo('BL','039',true,[0,0]);
var BL03A = new SpotsInfo('BL','03A',true,[0,0]);
var BL03B = new SpotsInfo('BL','03B',true,[0,0]);
var BL03C = new SpotsInfo('BL','03C',true,[0,0]);
var BL03D = new SpotsInfo('BL','03D',true,[0,0]);
var BL03E = new SpotsInfo('BL','03E',true,[0,0]);
var BL03F = new SpotsInfo('BL','03F',true,[0,0]);
var BL040 = new SpotsInfo('BL','040',true,[0,0]);
var BL041 = new SpotsInfo('BL','041',true,[0,0]);
var BL042 = new SpotsInfo('BL','042',true,[0,0]);
var BL043 = new SpotsInfo('BL','043',true,[0,0]);
var BL044 = new SpotsInfo('BL','044',true,[0,0]);
var BL045 = new SpotsInfo('BL','045',true,[0,0]);
var BL046 = new SpotsInfo('BL','046',true,[0,0]);
var BL047 = new SpotsInfo('BL','047',true,[0,0]);
var BL048 = new SpotsInfo('BL','048',true,[0,0]);
var BL049 = new SpotsInfo('BL','049',true,[0,0]);
var BL04A = new SpotsInfo('BL','04A',true,[0,0]);
var BL04B = new SpotsInfo('BL','04B',true,[0,0]);
var BL04C = new SpotsInfo('BL','04C',true,[0,0]);
var BL04D = new SpotsInfo('BL','04D',true,[0,0]);
var BL04E = new SpotsInfo('BL','04E',true,[0,0]);
var BL04F = new SpotsInfo('BL','04F',true,[0,0]);
var BL050 = new SpotsInfo('BL','050',true,[0,0]);
var BL051 = new SpotsInfo('BL','051',true,[0,0]);
var BL052 = new SpotsInfo('BL','052',true,[0,0]);
var BL053 = new SpotsInfo('BL','053',true,[0,0]);
var BL054 = new SpotsInfo('BL','054',true,[0,0]);
var BL055 = new SpotsInfo('BL','055',true,[0,0]);
var BL056 = new SpotsInfo('BL','056',true,[0,0]);
var BL057 = new SpotsInfo('BL','057',true,[0,0]);
var BL058 = new SpotsInfo('BL','058',true,[0,0]);
var BL059 = new SpotsInfo('BL','059',true,[0,0]);
var BL05A = new SpotsInfo('BL','05A',true,[0,0]);
var BL05B = new SpotsInfo('BL','05B',true,[0,0]);
var BL05C = new SpotsInfo('BL','05C',true,[0,0]);
var BL05D = new SpotsInfo('BL','05D',true,[0,0]);
var BL05E = new SpotsInfo('BL','05E',true,[0,0]);
var BL05F = new SpotsInfo('BL','05F',true,[0,0]);
var BL060 = new SpotsInfo('BL','060',true,[0,0]);
var BL061 = new SpotsInfo('BL','061',true,[0,0]);
var BL062 = new SpotsInfo('BL','062',true,[0,0]);
var BL063 = new SpotsInfo('BL','063',true,[0,0]);
var BL064 = new SpotsInfo('BL','064',true,[0,0]);
var BL065 = new SpotsInfo('BL','065',true,[0,0]);
var BL066 = new SpotsInfo('BL','066',true,[0,0]);
var BL067 = new SpotsInfo('BL','067',true,[0,0]);
var BL068 = new SpotsInfo('BL','068',true,[0,0]);
var BL069 = new SpotsInfo('BL','069',true,[0,0]);
var BL06A = new SpotsInfo('BL','06A',true,[0,0]);
var BL06B = new SpotsInfo('BL','06B',true,[0,0]);
var BL06C = new SpotsInfo('BL','06C',true,[0,0]);
var BL06D = new SpotsInfo('BL','06D',true,[0,0]);
var BL06E = new SpotsInfo('BL','06E',true,[0,0]);
var BL06F = new SpotsInfo('BL','06F',true,[0,0]);
var BL070 = new SpotsInfo('BL','070',true,[0,0]);
var BL071 = new SpotsInfo('BL','071',true,[0,0]);
var BL072 = new SpotsInfo('BL','072',true,[0,0]);
var BL073 = new SpotsInfo('BL','073',true,[0,0]);
var BL074 = new SpotsInfo('BL','074',true,[0,0]);
var BL075 = new SpotsInfo('BL','075',true,[0,0]);
var BL076 = new SpotsInfo('BL','076',true,[0,0]);
var BL077 = new SpotsInfo('BL','077',true,[0,0]);
var lotBLSpots = [BL001,BL002,BL003,BL004,BL005,BL006,BL007,BL008,BL009,BL00A
				 ,BL00B,BL00C,BL00D,BL00E,BL00F,BL010,BL011,BL012,BL013,BL014
				 ,BL015,BL016,BL017,BL018,BL019,BL01A,BL01B,BL01C,BL01D,BL01E
				 ,BL01F,BL020,BL021,BL022,BL023,BL024,BL025,BL026,BL027,BL028
				 ,BL029,BL02A,BL02B,BL02C,BL02D,BL02E,BL02F,BL030,BL031,BL032
				 ,BL033,BL034,BL035,BL036,BL037,BL038,BL039,BL03A,BL03B,BL03C
				 ,BL03D,BL03E,BL03F,BL040,BL041,BL042,BL043,BL044,BL045,BL046
				 ,BL047,BL048,BL049,BL04A,BL04B,BL04C,BL04D,BL04E,BL04F,BL050
				 ,BL051,BL052,BL053,BL054,BL055,BL056,BL057,BL058,BL059,BL05A
				 ,BL05B,BL05C,BL05D,BL05E,BL05F,BL060,BL061,BL062,BL063,BL064
				 ,BL065,BL066,BL067,BL068,BL069,BL06A,BL06B,BL06C,BL06D,BL06E
				 ,BL06F,BL070,BL071,BL072,BL073,BL074,BL075,BL076,BL077];

//Lot CC - - - - - - - - - - - - - - - - - - - - - - - - -
var CC001 = new SpotsInfo('CC','001',true,[0,0]);
var CC002 = new SpotsInfo('CC','002',true,[0,0]);
var CC003 = new SpotsInfo('CC','003',true,[0,0]);
var CC004 = new SpotsInfo('CC','004',true,[0,0]);
var CC005 = new SpotsInfo('CC','005',true,[0,0]);
var CC006 = new SpotsInfo('CC','006',true,[0,0]);
var CC007 = new SpotsInfo('CC','007',true,[0,0]);
var CC008 = new SpotsInfo('CC','008',true,[0,0]);
var CC009 = new SpotsInfo('CC','009',true,[0,0]);
var CC00A = new SpotsInfo('CC','00A',true,[0,0]);
var CC00B = new SpotsInfo('CC','00B',true,[0,0]);
var CC00C = new SpotsInfo('CC','00C',true,[0,0]);
var CC00D = new SpotsInfo('CC','00D',true,[0,0]);
var CC00E = new SpotsInfo('CC','00E',true,[0,0]);
var CC00F = new SpotsInfo('CC','00F',true,[0,0]);
var CC010 = new SpotsInfo('CC','010',true,[0,0]);
var CC011 = new SpotsInfo('CC','011',true,[0,0]);
var CC012 = new SpotsInfo('CC','012',true,[0,0]);
var CC013 = new SpotsInfo('CC','013',true,[0,0]);
var CC014 = new SpotsInfo('CC','014',true,[0,0]);
var CC015 = new SpotsInfo('CC','015',true,[0,0]);
var CC016 = new SpotsInfo('CC','016',true,[0,0]);
var CC017 = new SpotsInfo('CC','017',true,[0,0]);
var CC018 = new SpotsInfo('CC','018',true,[0,0]);
var CC019 = new SpotsInfo('CC','019',true,[0,0]);
var CC01A = new SpotsInfo('CC','01A',true,[0,0]);
var CC01B = new SpotsInfo('CC','01B',true,[0,0]);
var CC01C = new SpotsInfo('CC','01C',true,[0,0]);
var CC01D = new SpotsInfo('CC','01D',true,[0,0]);
var CC01E = new SpotsInfo('CC','01E',true,[0,0]);
var CC01F = new SpotsInfo('CC','01F',true,[0,0]);
var CC020 = new SpotsInfo('CC','020',true,[0,0]);
var CC021 = new SpotsInfo('CC','021',true,[0,0]);
var CC022 = new SpotsInfo('CC','022',true,[0,0]);
var CC023 = new SpotsInfo('CC','023',true,[0,0]);
var CC024 = new SpotsInfo('CC','024',true,[0,0]);
var CC025 = new SpotsInfo('CC','025',true,[0,0]);
var CC026 = new SpotsInfo('CC','026',true,[0,0]);
var CC027 = new SpotsInfo('CC','027',true,[0,0]);
var CC028 = new SpotsInfo('CC','028',true,[0,0]);
var CC029 = new SpotsInfo('CC','029',true,[0,0]);
var CC02A = new SpotsInfo('CC','02A',true,[0,0]);
var CC02B = new SpotsInfo('CC','02B',true,[0,0]);
var CC02C = new SpotsInfo('CC','02C',true,[0,0]);
var CC02D = new SpotsInfo('CC','02D',true,[0,0]);
var CC02E = new SpotsInfo('CC','02E',true,[0,0]);
var CC02F = new SpotsInfo('CC','02F',true,[0,0]);
var CC030 = new SpotsInfo('CC','030',true,[0,0]);
var CC031 = new SpotsInfo('CC','031',true,[0,0]);
var CC032 = new SpotsInfo('CC','032',true,[0,0]);
var CC033 = new SpotsInfo('CC','033',true,[0,0]);
var CC034 = new SpotsInfo('CC','034',true,[0,0]);
var CC035 = new SpotsInfo('CC','035',true,[0,0]);
var CC036 = new SpotsInfo('CC','036',true,[0,0]);
var CC037 = new SpotsInfo('CC','037',true,[0,0]);
var CC038 = new SpotsInfo('CC','038',true,[0,0]);
var CC039 = new SpotsInfo('CC','039',true,[0,0]);
var CC03A = new SpotsInfo('CC','03A',true,[0,0]);
var CC03B = new SpotsInfo('CC','03B',true,[0,0]);
var CC03C = new SpotsInfo('CC','03C',true,[0,0]);
var CC03D = new SpotsInfo('CC','03D',true,[0,0]);
var CC03E = new SpotsInfo('CC','03E',true,[0,0]);
var CC03F = new SpotsInfo('CC','03F',true,[0,0]);
var CC040 = new SpotsInfo('CC','040',true,[0,0]);
var CC041 = new SpotsInfo('CC','041',true,[0,0]);
var CC042 = new SpotsInfo('CC','042',true,[0,0]);
var CC043 = new SpotsInfo('CC','043',true,[0,0]);
var CC044 = new SpotsInfo('CC','044',true,[0,0]);
var CC045 = new SpotsInfo('CC','045',true,[0,0]);
var CC046 = new SpotsInfo('CC','046',true,[0,0]);
var CC047 = new SpotsInfo('CC','047',true,[0,0]);
var CC048 = new SpotsInfo('CC','048',true,[0,0]);
var CC049 = new SpotsInfo('CC','049',true,[0,0]);
var CC04A = new SpotsInfo('CC','04A',true,[0,0]);
var CC04B = new SpotsInfo('CC','04B',true,[0,0]);
var CC04C = new SpotsInfo('CC','04C',true,[0,0]);
var CC04D = new SpotsInfo('CC','04D',true,[0,0]);
var CC04E = new SpotsInfo('CC','04E',true,[0,0]);
var CC04F = new SpotsInfo('CC','04F',true,[0,0]);
var CC050 = new SpotsInfo('CC','050',true,[0,0]);
var CC051 = new SpotsInfo('CC','051',true,[0,0]);
var CC052 = new SpotsInfo('CC','052',true,[0,0]);
var CC053 = new SpotsInfo('CC','053',true,[0,0]);
var CC054 = new SpotsInfo('CC','054',true,[0,0]);
var CC055 = new SpotsInfo('CC','055',true,[0,0]);
var CC056 = new SpotsInfo('CC','056',true,[0,0]);
var CC057 = new SpotsInfo('CC','057',true,[0,0]);
var CC058 = new SpotsInfo('CC','058',true,[0,0]);
var CC059 = new SpotsInfo('CC','059',true,[0,0]);
var CC05A = new SpotsInfo('CC','05A',true,[0,0]);
var CC05B = new SpotsInfo('CC','05B',true,[0,0]);
var CC05C = new SpotsInfo('CC','05C',true,[0,0]);
var CC05D = new SpotsInfo('CC','05D',true,[0,0]);
var CC05E = new SpotsInfo('CC','05E',true,[0,0]);
var CC05F = new SpotsInfo('CC','05F',true,[0,0]);
var CC060 = new SpotsInfo('CC','060',true,[0,0]);
var CC061 = new SpotsInfo('CC','061',true,[0,0]);
var CC062 = new SpotsInfo('CC','062',true,[0,0]);
var CC063 = new SpotsInfo('CC','063',true,[0,0]);
var CC064 = new SpotsInfo('CC','064',true,[0,0]);
var CC065 = new SpotsInfo('CC','065',true,[0,0]);
var CC066 = new SpotsInfo('CC','066',true,[0,0]);
var CC067 = new SpotsInfo('CC','067',true,[0,0]);
var CC068 = new SpotsInfo('CC','068',true,[0,0]);
var CC069 = new SpotsInfo('CC','069',true,[0,0]);
var CC06A = new SpotsInfo('CC','06A',true,[0,0]);
var CC06B = new SpotsInfo('CC','06B',true,[0,0]);
var CC06C = new SpotsInfo('CC','06C',true,[0,0]);
var CC06D = new SpotsInfo('CC','06D',true,[0,0]);
var CC06E = new SpotsInfo('CC','06E',true,[0,0]);
var CC06F = new SpotsInfo('CC','06F',true,[0,0]);
var CC070 = new SpotsInfo('CC','070',true,[0,0]);
var CC071 = new SpotsInfo('CC','071',true,[0,0]);
var CC072 = new SpotsInfo('CC','072',true,[0,0]);
var CC073 = new SpotsInfo('CC','073',true,[0,0]);
var CC074 = new SpotsInfo('CC','074',true,[0,0]);
var CC075 = new SpotsInfo('CC','075',true,[0,0]);
var CC076 = new SpotsInfo('CC','076',true,[0,0]);
var CC077 = new SpotsInfo('CC','077',true,[0,0]);
var CC078 = new SpotsInfo('CC','078',true,[0,0]);
var CC079 = new SpotsInfo('CC','079',true,[0,0]);
var CC07A = new SpotsInfo('CC','07A',true,[0,0]);
var CC07B = new SpotsInfo('CC','07B',true,[0,0]);
var CC07C = new SpotsInfo('CC','07C',true,[0,0]);
var CC07D = new SpotsInfo('CC','07D',true,[0,0]);
var CC07E = new SpotsInfo('CC','07E',true,[0,0]);
var CC07F = new SpotsInfo('CC','07F',true,[0,0]);
var CC080 = new SpotsInfo('CC','080',true,[0,0]);
var CC081 = new SpotsInfo('CC','081',true,[0,0]);
var CC082 = new SpotsInfo('CC','082',true,[0,0]);
var CC083 = new SpotsInfo('CC','083',true,[0,0]);
var CC084 = new SpotsInfo('CC','084',true,[0,0]);
var CC085 = new SpotsInfo('CC','085',true,[0,0]);
var CC086 = new SpotsInfo('CC','086',true,[0,0]);
var CC087 = new SpotsInfo('CC','087',true,[0,0]);
var CC088 = new SpotsInfo('CC','088',true,[0,0]);
var CC089 = new SpotsInfo('CC','089',true,[0,0]);
var CC08A = new SpotsInfo('CC','08A',true,[0,0]);
var CC08B = new SpotsInfo('CC','08B',true,[0,0]);
var CC08C = new SpotsInfo('CC','08C',true,[0,0]);
var CC08D = new SpotsInfo('CC','08D',true,[0,0]);
var CC08E = new SpotsInfo('CC','08E',true,[0,0]);
var CC08F = new SpotsInfo('CC','08F',true,[0,0]);
var CC090 = new SpotsInfo('CC','090',true,[0,0]);
var CC091 = new SpotsInfo('CC','091',true,[0,0]);
var CC092 = new SpotsInfo('CC','092',true,[0,0]);
var CC093 = new SpotsInfo('CC','093',true,[0,0]);
var CC094 = new SpotsInfo('CC','094',true,[0,0]);
var CC095 = new SpotsInfo('CC','095',true,[0,0]);
var CC096 = new SpotsInfo('CC','096',true,[0,0]);
var CC097 = new SpotsInfo('CC','097',true,[0,0]);
var CC098 = new SpotsInfo('CC','098',true,[0,0]);
var CC099 = new SpotsInfo('CC','099',true,[0,0]);
var CC09A = new SpotsInfo('CC','09A',true,[0,0]);
var CC09B = new SpotsInfo('CC','09B',true,[0,0]);
var CC09C = new SpotsInfo('CC','09C',true,[0,0]);
var CC09D = new SpotsInfo('CC','09D',true,[0,0]);
var CC09E = new SpotsInfo('CC','09E',true,[0,0]);
var CC09F = new SpotsInfo('CC','09F',true,[0,0]);
var CC0A0 = new SpotsInfo('CC','0A0',true,[0,0]);
var CC0A1 = new SpotsInfo('CC','0A1',true,[0,0]);
var CC0A2 = new SpotsInfo('CC','0A2',true,[0,0]);
var CC0A3 = new SpotsInfo('CC','0A3',true,[0,0]);
var CC0A4 = new SpotsInfo('CC','0A4',true,[0,0]);
var CC0A5 = new SpotsInfo('CC','0A5',true,[0,0]);
var CC0A6 = new SpotsInfo('CC','0A6',true,[0,0]);
var CC0A7 = new SpotsInfo('CC','0A7',true,[0,0]);
var CC0A8 = new SpotsInfo('CC','0A8',true,[0,0]);
var CC0A9 = new SpotsInfo('CC','0A9',true,[0,0]);
var CC0AA = new SpotsInfo('CC','0AA',true,[0,0]);
var CC0AB = new SpotsInfo('CC','0AB',true,[0,0]);
var CC0AC = new SpotsInfo('CC','0AC',true,[0,0]);
var CC0AD = new SpotsInfo('CC','0AD',true,[0,0]);
var CC0AE = new SpotsInfo('CC','0AE',true,[0,0]);
var CC0AF = new SpotsInfo('CC','0AF',true,[0,0]);
var CC0B0 = new SpotsInfo('CC','0B0',true,[0,0]);
var CC0B1 = new SpotsInfo('CC','0B1',true,[0,0]);
var CC0B2 = new SpotsInfo('CC','0B2',true,[0,0]);
var CC0B3 = new SpotsInfo('CC','0B3',true,[0,0]);
var CC0B4 = new SpotsInfo('CC','0B4',true,[0,0]);
var CC0B5 = new SpotsInfo('CC','0B5',true,[0,0]);
var CC0B6 = new SpotsInfo('CC','0B6',true,[0,0]);
var CC0B7 = new SpotsInfo('CC','0B7',true,[0,0]);
var CC0B8 = new SpotsInfo('CC','0B8',true,[0,0]);
var CC0B9 = new SpotsInfo('CC','0B9',true,[0,0]);
var CC0BA = new SpotsInfo('CC','0BA',true,[0,0]);
var CC0BB = new SpotsInfo('CC','0BB',true,[0,0]);
var CC0BC = new SpotsInfo('CC','0BC',true,[0,0]);
var CC0BD = new SpotsInfo('CC','0BD',true,[0,0]);
var CC0BE = new SpotsInfo('CC','0BE',true,[0,0]);
var CC0BF = new SpotsInfo('CC','0BF',true,[0,0]);
var CC0C0 = new SpotsInfo('CC','0C0',true,[0,0]);
var CC0C1 = new SpotsInfo('CC','0C1',true,[0,0]);
var CC0C2 = new SpotsInfo('CC','0C2',true,[0,0]);
var CC0C3 = new SpotsInfo('CC','0C3',true,[0,0]);
var CC0C4 = new SpotsInfo('CC','0C4',true,[0,0]);
var CC0C5 = new SpotsInfo('CC','0C5',true,[0,0]);
var CC0C6 = new SpotsInfo('CC','0C6',true,[0,0]);
var CC0C7 = new SpotsInfo('CC','0C7',true,[0,0]);
var CC0C8 = new SpotsInfo('CC','0C8',true,[0,0]);
var CC0C9 = new SpotsInfo('CC','0C9',true,[0,0]);
var CC0CA = new SpotsInfo('CC','0CA',true,[0,0]);
var CC0CB = new SpotsInfo('CC','0CB',true,[0,0]);
var CC0CC = new SpotsInfo('CC','0CC',true,[0,0]);
var CC0CD = new SpotsInfo('CC','0CD',true,[0,0]);
var CC0CE = new SpotsInfo('CC','0CE',true,[0,0]);
var CC0CF = new SpotsInfo('CC','0CF',true,[0,0]);
var CC0D0 = new SpotsInfo('CC','0D0',true,[0,0]);
var CC0D1 = new SpotsInfo('CC','0D1',true,[0,0]);
var CC0D2 = new SpotsInfo('CC','0D2',true,[0,0]);
var CC0D3 = new SpotsInfo('CC','0D3',true,[0,0]);
var CC0D4 = new SpotsInfo('CC','0D4',true,[0,0]);
var CC0D5 = new SpotsInfo('CC','0D5',true,[0,0]);
var CC0D6 = new SpotsInfo('CC','0D6',true,[0,0]);
var CC0D7 = new SpotsInfo('CC','0D7',true,[0,0]);
var CC0D8 = new SpotsInfo('CC','0D8',true,[0,0]);
var CC0D9 = new SpotsInfo('CC','0D9',true,[0,0]);
var CC0DA = new SpotsInfo('CC','0DA',true,[0,0]);
var CC0DB = new SpotsInfo('CC','0DB',true,[0,0]);
var CC0DC = new SpotsInfo('CC','0DC',true,[0,0]);
var CC0DD = new SpotsInfo('CC','0DD',true,[0,0]);
var CC0DE = new SpotsInfo('CC','0DE',true,[0,0]);
var CC0DF = new SpotsInfo('CC','0DF',true,[0,0]);
var CC0E0 = new SpotsInfo('CC','0E0',true,[0,0]);
var CC0E1 = new SpotsInfo('CC','0E1',true,[0,0]);
var CC0E2 = new SpotsInfo('CC','0E2',true,[0,0]);
var CC0E3 = new SpotsInfo('CC','0E3',true,[0,0]);
var CC0E4 = new SpotsInfo('CC','0E4',true,[0,0]);
var CC0E5 = new SpotsInfo('CC','0E5',true,[0,0]);
var CC0E6 = new SpotsInfo('CC','0E6',true,[0,0]);
var CC0E7 = new SpotsInfo('CC','0E7',true,[0,0]);
var CC0E8 = new SpotsInfo('CC','0E8',true,[0,0]);
var CC0E9 = new SpotsInfo('CC','0E9',true,[0,0]);
var CC0EA = new SpotsInfo('CC','0EA',true,[0,0]);
var CC0EB = new SpotsInfo('CC','0EB',true,[0,0]);
var CC0EC = new SpotsInfo('CC','0EC',true,[0,0]);
var CC0ED = new SpotsInfo('CC','0ED',true,[0,0]);
var CC0EE = new SpotsInfo('CC','0EE',true,[0,0]);
var CC0EF = new SpotsInfo('CC','0EF',true,[0,0]);
var CC0F0 = new SpotsInfo('CC','0F0',true,[0,0]);
var CC0F1 = new SpotsInfo('CC','0F1',true,[0,0]);
var CC0F2 = new SpotsInfo('CC','0F2',true,[0,0]);
var CC0F3 = new SpotsInfo('CC','0F3',true,[0,0]);
var CC0F4 = new SpotsInfo('CC','0F4',true,[0,0]);
var CC0F5 = new SpotsInfo('CC','0F5',true,[0,0]);
var CC0F6 = new SpotsInfo('CC','0F6',true,[0,0]);
var CC0F7 = new SpotsInfo('CC','0F7',true,[0,0]);
var CC0F8 = new SpotsInfo('CC','0F8',true,[0,0]);
var CC0F9 = new SpotsInfo('CC','0F9',true,[0,0]);
var CC0FA = new SpotsInfo('CC','0FA',true,[0,0]);
var CC0FB = new SpotsInfo('CC','0FB',true,[0,0]);
var CC0FC = new SpotsInfo('CC','0FC',true,[0,0]);
var CC0FD = new SpotsInfo('CC','0FD',true,[0,0]);
var CC0FE = new SpotsInfo('CC','0FE',true,[0,0]);
var CC0FF = new SpotsInfo('CC','0FF',true,[0,0]);
var CC100 = new SpotsInfo('CC','100',true,[0,0]);
var CC101 = new SpotsInfo('CC','101',true,[0,0]);
var CC102 = new SpotsInfo('CC','102',true,[0,0]);
var CC103 = new SpotsInfo('CC','103',true,[0,0]);
var CC104 = new SpotsInfo('CC','104',true,[0,0]);
var CC105 = new SpotsInfo('CC','105',true,[0,0]);
var CC106 = new SpotsInfo('CC','106',true,[0,0]);
var CC107 = new SpotsInfo('CC','107',true,[0,0]);
var CC108 = new SpotsInfo('CC','108',true,[0,0]);
var CC109 = new SpotsInfo('CC','109',true,[0,0]);
var CC10A = new SpotsInfo('CC','10A',true,[0,0]);
var CC10B = new SpotsInfo('CC','10B',true,[0,0]);
var CC10C = new SpotsInfo('CC','10C',true,[0,0]);
var CC10D = new SpotsInfo('CC','10D',true,[0,0]);
var CC10E = new SpotsInfo('CC','10E',true,[0,0]);
var CC10F = new SpotsInfo('CC','10F',true,[0,0]);
var CC110 = new SpotsInfo('CC','110',true,[0,0]);
var CC111 = new SpotsInfo('CC','111',true,[0,0]);
var CC112 = new SpotsInfo('CC','112',true,[0,0]);
var CC113 = new SpotsInfo('CC','113',true,[0,0]);
var CC114 = new SpotsInfo('CC','114',true,[0,0]);
var CC115 = new SpotsInfo('CC','115',true,[0,0]);
var CC116 = new SpotsInfo('CC','116',true,[0,0]);
var CC117 = new SpotsInfo('CC','117',true,[0,0]);
var CC118 = new SpotsInfo('CC','118',true,[0,0]);
var CC119 = new SpotsInfo('CC','119',true,[0,0]);
var CC11A = new SpotsInfo('CC','11A',true,[0,0]);
var CC11B = new SpotsInfo('CC','11B',true,[0,0]);
var CC11C = new SpotsInfo('CC','11C',true,[0,0]);
var CC11D = new SpotsInfo('CC','11D',true,[0,0]);
var CC11E = new SpotsInfo('CC','11E',true,[0,0]);
var CC11F = new SpotsInfo('CC','11F',true,[0,0]);
var CC120 = new SpotsInfo('CC','120',true,[0,0]);
var CC121 = new SpotsInfo('CC','121',true,[0,0]);
var CC122 = new SpotsInfo('CC','122',true,[0,0]);
var CC123 = new SpotsInfo('CC','123',true,[0,0]);
var CC124 = new SpotsInfo('CC','124',true,[0,0]);
var CC125 = new SpotsInfo('CC','125',true,[0,0]);
var CC126 = new SpotsInfo('CC','126',true,[0,0]);
var CC127 = new SpotsInfo('CC','127',true,[0,0]);
var CC128 = new SpotsInfo('CC','128',true,[0,0]);
var CC129 = new SpotsInfo('CC','129',true,[0,0]);
var CC12A = new SpotsInfo('CC','12A',true,[0,0]);
var CC12B = new SpotsInfo('CC','12B',true,[0,0]);
var CC12C = new SpotsInfo('CC','12C',true,[0,0]);
var CC12D = new SpotsInfo('CC','12D',true,[0,0]);
var CC12E = new SpotsInfo('CC','12E',true,[0,0]);
var CC12F = new SpotsInfo('CC','12F',true,[0,0]);
var CC130 = new SpotsInfo('CC','130',true,[0,0]);
var CC131 = new SpotsInfo('CC','131',true,[0,0]);
var CC132 = new SpotsInfo('CC','132',true,[0,0]);
var CC133 = new SpotsInfo('CC','133',true,[0,0]);
var CC134 = new SpotsInfo('CC','134',true,[0,0]);
var CC135 = new SpotsInfo('CC','135',true,[0,0]);
var CC136 = new SpotsInfo('CC','136',true,[0,0]);
var CC137 = new SpotsInfo('CC','137',true,[0,0]);
var CC138 = new SpotsInfo('CC','138',true,[0,0]);
var CC139 = new SpotsInfo('CC','139',true,[0,0]);
var CC13A = new SpotsInfo('CC','13A',true,[0,0]);
var CC13B = new SpotsInfo('CC','13B',true,[0,0]);
var CC13C = new SpotsInfo('CC','13C',true,[0,0]);
var CC13D = new SpotsInfo('CC','13D',true,[0,0]);
var CC13E = new SpotsInfo('CC','13E',true,[0,0]);
var CC13F = new SpotsInfo('CC','13F',true,[0,0]);
var CC140 = new SpotsInfo('CC','140',true,[0,0]);
var CC141 = new SpotsInfo('CC','141',true,[0,0]);
var CC142 = new SpotsInfo('CC','142',true,[0,0]);
var CC143 = new SpotsInfo('CC','143',true,[0,0]);
var CC144 = new SpotsInfo('CC','144',true,[0,0]);
var CC145 = new SpotsInfo('CC','145',true,[0,0]);
var CC146 = new SpotsInfo('CC','146',true,[0,0]);
var CC147 = new SpotsInfo('CC','147',true,[0,0]);
var CC148 = new SpotsInfo('CC','148',true,[0,0]);
var CC149 = new SpotsInfo('CC','149',true,[0,0]);
var CC14A = new SpotsInfo('CC','14A',true,[0,0]);
var CC14B = new SpotsInfo('CC','14B',true,[0,0]);
var CC14C = new SpotsInfo('CC','14C',true,[0,0]);
var CC14D = new SpotsInfo('CC','14D',true,[0,0]);
var CC14E = new SpotsInfo('CC','14E',true,[0,0]);
var CC14F = new SpotsInfo('CC','14F',true,[0,0]);
var CC150 = new SpotsInfo('CC','150',true,[0,0]);
var CC151 = new SpotsInfo('CC','151',true,[0,0]);
var CC152 = new SpotsInfo('CC','152',true,[0,0]);
var CC153 = new SpotsInfo('CC','153',true,[0,0]);
var CC154 = new SpotsInfo('CC','154',true,[0,0]);
var CC155 = new SpotsInfo('CC','155',true,[0,0]);
var CC156 = new SpotsInfo('CC','156',true,[0,0]);
var CC157 = new SpotsInfo('CC','157',true,[0,0]);
var CC158 = new SpotsInfo('CC','158',true,[0,0]);
var CC159 = new SpotsInfo('CC','159',true,[0,0]);
var CC15A = new SpotsInfo('CC','15A',true,[0,0]);
var CC15B = new SpotsInfo('CC','15B',true,[0,0]);
var CC15C = new SpotsInfo('CC','15C',true,[0,0]);
var CC15D = new SpotsInfo('CC','15D',true,[0,0]);
var CC15E = new SpotsInfo('CC','15E',true,[0,0]);
var CC15F = new SpotsInfo('CC','15F',true,[0,0]);
var CC160 = new SpotsInfo('CC','160',true,[0,0]);
var CC161 = new SpotsInfo('CC','161',true,[0,0]);
var CC162 = new SpotsInfo('CC','162',true,[0,0]);
var CC163 = new SpotsInfo('CC','163',true,[0,0]);
var CC164 = new SpotsInfo('CC','164',true,[0,0]);
var CC165 = new SpotsInfo('CC','165',true,[0,0]);
var CC166 = new SpotsInfo('CC','166',true,[0,0]);
var CC167 = new SpotsInfo('CC','167',true,[0,0]);
var CC168 = new SpotsInfo('CC','168',true,[0,0]);
var CC169 = new SpotsInfo('CC','169',true,[0,0]);
var CC16A = new SpotsInfo('CC','16A',true,[0,0]);
var CC16B = new SpotsInfo('CC','16B',true,[0,0]);
var CC16C = new SpotsInfo('CC','16C',true,[0,0]);
var CC16D = new SpotsInfo('CC','16D',true,[0,0]);
var CC16E = new SpotsInfo('CC','16E',true,[0,0]);
var CC16F = new SpotsInfo('CC','16F',true,[0,0]);
var CC170 = new SpotsInfo('CC','170',true,[0,0]);
var CC171 = new SpotsInfo('CC','171',true,[0,0]);
var CC172 = new SpotsInfo('CC','172',true,[0,0]);
var CC173 = new SpotsInfo('CC','173',true,[0,0]);
var CC174 = new SpotsInfo('CC','174',true,[0,0]);
var CC175 = new SpotsInfo('CC','175',true,[0,0]);
var CC176 = new SpotsInfo('CC','176',true,[0,0]);
var CC177 = new SpotsInfo('CC','177',true,[0,0]);
var CC178 = new SpotsInfo('CC','178',true,[0,0]);
var CC179 = new SpotsInfo('CC','179',true,[0,0]);
var CC17A = new SpotsInfo('CC','17A',true,[0,0]);
var CC17B = new SpotsInfo('CC','17B',true,[0,0]);
var CC17C = new SpotsInfo('CC','17C',true,[0,0]);
var CC17D = new SpotsInfo('CC','17D',true,[0,0]);
var CC17E = new SpotsInfo('CC','17E',true,[0,0]);
var CC17F = new SpotsInfo('CC','17F',true,[0,0]);
var CC180 = new SpotsInfo('CC','180',true,[0,0]);
var CC181 = new SpotsInfo('CC','181',true,[0,0]);
var CC182 = new SpotsInfo('CC','182',true,[0,0]);
var CC183 = new SpotsInfo('CC','183',true,[0,0]);
var CC184 = new SpotsInfo('CC','184',true,[0,0]);
var CC185 = new SpotsInfo('CC','185',true,[0,0]);
var CC186 = new SpotsInfo('CC','186',true,[0,0]);
var CC187 = new SpotsInfo('CC','187',true,[0,0]);
var CC188 = new SpotsInfo('CC','188',true,[0,0]);
var CC189 = new SpotsInfo('CC','189',true,[0,0]);
var CC18A = new SpotsInfo('CC','18A',true,[0,0]);
var CC18B = new SpotsInfo('CC','18B',true,[0,0]);
var CC18C = new SpotsInfo('CC','18C',true,[0,0]);
var CC18D = new SpotsInfo('CC','18D',true,[0,0]);
var CC18E = new SpotsInfo('CC','18E',true,[0,0]);
var CC18F = new SpotsInfo('CC','18F',true,[0,0]);
var CC190 = new SpotsInfo('CC','190',true,[0,0]);
var CC191 = new SpotsInfo('CC','191',true,[0,0]);
var CC192 = new SpotsInfo('CC','192',true,[0,0]);
var CC193 = new SpotsInfo('CC','193',true,[0,0]);
var CC194 = new SpotsInfo('CC','194',true,[0,0]);
var CC195 = new SpotsInfo('CC','195',true,[0,0]);
var CC196 = new SpotsInfo('CC','196',true,[0,0]);
var CC197 = new SpotsInfo('CC','197',true,[0,0]);
var CC198 = new SpotsInfo('CC','198',true,[0,0]);
var CC199 = new SpotsInfo('CC','199',true,[0,0]);
var CC19A = new SpotsInfo('CC','19A',true,[0,0]);
var CC19B = new SpotsInfo('CC','19B',true,[0,0]);
var CC19C = new SpotsInfo('CC','19C',true,[0,0]);
var CC19D = new SpotsInfo('CC','19D',true,[0,0]);
var CC19E = new SpotsInfo('CC','19E',true,[0,0]);
var CC19F = new SpotsInfo('CC','19F',true,[0,0]);
var CC1A0 = new SpotsInfo('CC','1A0',true,[0,0]);
var CC1A1 = new SpotsInfo('CC','1A1',true,[0,0]);
var CC1A2 = new SpotsInfo('CC','1A2',true,[0,0]);
var CC1A3 = new SpotsInfo('CC','1A3',true,[0,0]);
var CC1A4 = new SpotsInfo('CC','1A4',true,[0,0]);
var CC1A5 = new SpotsInfo('CC','1A5',true,[0,0]);
var CC1A6 = new SpotsInfo('CC','1A6',true,[0,0]);
var CC1A7 = new SpotsInfo('CC','1A7',true,[0,0]);
var CC1A8 = new SpotsInfo('CC','1A8',true,[0,0]);
var CC1A9 = new SpotsInfo('CC','1A9',true,[0,0]);
var CC1AA = new SpotsInfo('CC','1AA',true,[0,0]);
var CC1AB = new SpotsInfo('CC','1AB',true,[0,0]);
var CC1AC = new SpotsInfo('CC','1AC',true,[0,0]);
var CC1AD = new SpotsInfo('CC','1AD',true,[0,0]);
var CC1AE = new SpotsInfo('CC','1AE',true,[0,0]);
var CC1AF = new SpotsInfo('CC','1AF',true,[0,0]);
var CC1B0 = new SpotsInfo('CC','1B0',true,[0,0]);
var CC1B1 = new SpotsInfo('CC','1B1',true,[0,0]);
var CC1B2 = new SpotsInfo('CC','1B2',true,[0,0]);
var CC1B3 = new SpotsInfo('CC','1B3',true,[0,0]);
var CC1B4 = new SpotsInfo('CC','1B4',true,[0,0]);
var CC1B5 = new SpotsInfo('CC','1B5',true,[0,0]);
var CC1B6 = new SpotsInfo('CC','1B6',true,[0,0]);
var CC1B7 = new SpotsInfo('CC','1B7',true,[0,0]);
var CC1B8 = new SpotsInfo('CC','1B8',true,[0,0]);
var CC1B9 = new SpotsInfo('CC','1B9',true,[0,0]);
var CC1BA = new SpotsInfo('CC','1BA',true,[0,0]);
var CC1BB = new SpotsInfo('CC','1BB',true,[0,0]);
var CC1BC = new SpotsInfo('CC','1BC',true,[0,0]);
var CC1BD = new SpotsInfo('CC','1BD',true,[0,0]);
var CC1BE = new SpotsInfo('CC','1BE',true,[0,0]);
var CC1BF = new SpotsInfo('CC','1BF',true,[0,0]);
var CC1C0 = new SpotsInfo('CC','1C0',true,[0,0]);
var CC1C1 = new SpotsInfo('CC','1C1',true,[0,0]);
var CC1C2 = new SpotsInfo('CC','1C2',true,[0,0]);
var CC1C3 = new SpotsInfo('CC','1C3',true,[0,0]);
var CC1C4 = new SpotsInfo('CC','1C4',true,[0,0]);
var CC1C5 = new SpotsInfo('CC','1C5',true,[0,0]);
var CC1C6 = new SpotsInfo('CC','1C6',true,[0,0]);
var CC1C7 = new SpotsInfo('CC','1C7',true,[0,0]);
var CC1C8 = new SpotsInfo('CC','1C8',true,[0,0]);
var CC1C9 = new SpotsInfo('CC','1C9',true,[0,0]);
var CC1CA = new SpotsInfo('CC','1CA',true,[0,0]);
var CC1CB = new SpotsInfo('CC','1CB',true,[0,0]);
var CC1CC = new SpotsInfo('CC','1CC',true,[0,0]);
var CC1CD = new SpotsInfo('CC','1CD',true,[0,0]);
var CC1CE = new SpotsInfo('CC','1CE',true,[0,0]);
var CC1CF = new SpotsInfo('CC','1CF',true,[0,0]);
var CC1D0 = new SpotsInfo('CC','1D0',true,[0,0]);
var CC1D1 = new SpotsInfo('CC','1D1',true,[0,0]);
var CC1D2 = new SpotsInfo('CC','1D2',true,[0,0]);
var CC1D3 = new SpotsInfo('CC','1D3',true,[0,0]);
var CC1D4 = new SpotsInfo('CC','1D4',true,[0,0]);
var CC1D5 = new SpotsInfo('CC','1D5',true,[0,0]);
var CC1D6 = new SpotsInfo('CC','1D6',true,[0,0]);
var CC1D7 = new SpotsInfo('CC','1D7',true,[0,0]);
var CC1D8 = new SpotsInfo('CC','1D8',true,[0,0]);
var CC1D9 = new SpotsInfo('CC','1D9',true,[0,0]);
var CC1DA = new SpotsInfo('CC','1DA',true,[0,0]);
var CC1DB = new SpotsInfo('CC','1DB',true,[0,0]);
var CC1DC = new SpotsInfo('CC','1DC',true,[0,0]);
var CC1DD = new SpotsInfo('CC','1DD',true,[0,0]);
var CC1DE = new SpotsInfo('CC','1DE',true,[0,0]);
var CC1DF = new SpotsInfo('CC','1DF',true,[0,0]);
var CC1E0 = new SpotsInfo('CC','1E0',true,[0,0]);
var CC1E1 = new SpotsInfo('CC','1E1',true,[0,0]);
var CC1E2 = new SpotsInfo('CC','1E2',true,[0,0]);
var CC1E3 = new SpotsInfo('CC','1E3',true,[0,0]);
var CC1E4 = new SpotsInfo('CC','1E4',true,[0,0]);
var CC1E5 = new SpotsInfo('CC','1E5',true,[0,0]);
var CC1E6 = new SpotsInfo('CC','1E6',true,[0,0]);
var CC1E7 = new SpotsInfo('CC','1E7',true,[0,0]);
var CC1E8 = new SpotsInfo('CC','1E8',true,[0,0]);
var CC1E9 = new SpotsInfo('CC','1E9',true,[0,0]);
var CC1EA = new SpotsInfo('CC','1EA',true,[0,0]);
var CC1EB = new SpotsInfo('CC','1EB',true,[0,0]);
var lotCCSpots = [CC001,CC002,CC003,CC004,CC005,CC006,CC007,CC008,CC009,CC00A
				 ,CC00B,CC00C,CC00D,CC00E,CC00F,CC010,CC011,CC012,CC013,CC014
				 ,CC015,CC016,CC017,CC018,CC019,CC01A,CC01B,CC01C,CC01D,CC01E
				 ,CC01F,CC020,CC021,CC022,CC023,CC024,CC025,CC026,CC027,CC028
				 ,CC029,CC02A,CC02B,CC02C,CC02D,CC02E,CC02F,CC030,CC031,CC032
				 ,CC033,CC034,CC035,CC036,CC037,CC038,CC039,CC03A,CC03B,CC03C
				 ,CC03D,CC03E,CC03F,CC040,CC041,CC042,CC043,CC044,CC045,CC046
				 ,CC047,CC048,CC049,CC04A,CC04B,CC04C,CC04D,CC04E,CC04F,CC050
				 ,CC051,CC052,CC053,CC054,CC055,CC056,CC057,CC058,CC059,CC05A
				 ,CC05B,CC05C,CC05D,CC05E,CC05F,CC060,CC061,CC062,CC063,CC064
				 ,CC065,CC066,CC067,CC068,CC069,CC06A,CC06B,CC06C,CC06D,CC06E
				 ,CC06F,CC070,CC071,CC072,CC073,CC074,CC075,CC076,CC077,CC078
				 ,CC079,CC07A,CC07B,CC07C,CC07D,CC07E,CC07F,CC080,CC081,CC082
				 ,CC083,CC084,CC085,CC086,CC087,CC088,CC089,CC08A,CC08B,CC08C
				 ,CC08D,CC08E,CC08F,CC090,CC091,CC092,CC093,CC094,CC095,CC096
				 ,CC097,CC098,CC099,CC09A,CC09B,CC09C,CC09D,CC09E,CC09F,CC0A0
				 ,CC0A1,CC0A2,CC0A3,CC0A4,CC0A5,CC0A6,CC0A7,CC0A8,CC0A9,CC0AA
				 ,CC0AB,CC0AC,CC0AD,CC0AE,CC0AF,CC0B0,CC0B1,CC0B2,CC0B3,CC0B4
				 ,CC0B5,CC0B6,CC0B7,CC0B8,CC0B9,CC0BA,CC0BB,CC0BC,CC0BD,CC0BE
				 ,CC0BF,CC0C0,CC0C1,CC0C2,CC0C3,CC0C4,CC0C5,CC0C6,CC0C7,CC0C8
				 ,CC0C9,CC0CA,CC0CB,CC0CC,CC0CD,CC0CE,CC0CF,CC0D0,CC0D1,CC0D2
				 ,CC0D3,CC0D4,CC0D5,CC0D6,CC0D7,CC0D8,CC0D9,CC0DA,CC0DB,CC0DC
				 ,CC0DD,CC0DE,CC0DF,CC0E0,CC0E1,CC0E2,CC0E3,CC0E4,CC0E5,CC0E6
				 ,CC0E7,CC0E8,CC0E9,CC0EA,CC0EB,CC0EC,CC0ED,CC0EE,CC0EF,CC0F0
				 ,CC0F1,CC0F2,CC0F3,CC0F4,CC0F5,CC0F6,CC0F7,CC0F8,CC0F9,CC0FA
				 ,CC0FB,CC0FC,CC0FD,CC0FE,CC0FF,CC100,CC101,CC102,CC103,CC104
				 ,CC105,CC106,CC107,CC108,CC109,CC10A,CC10B,CC10C,CC10D,CC10E
				 ,CC10F,CC110,CC111,CC112,CC113,CC114,CC115,CC116,CC117,CC118
				 ,CC119,CC11A,CC11B,CC11C,CC11D,CC11E,CC11F,CC120,CC121,CC122
				 ,CC123,CC124,CC125,CC126,CC127,CC128,CC129,CC12A,CC12B,CC12C
				 ,CC12D,CC12E,CC12F,CC130,CC131,CC132,CC133,CC134,CC135,CC136
				 ,CC137,CC138,CC139,CC13A,CC13B,CC13C,CC13D,CC13E,CC13F,CC140
				 ,CC141,CC142,CC143,CC144,CC145,CC146,CC147,CC148,CC149,CC14A
				 ,CC14B,CC14C,CC14D,CC14E,CC14F,CC150,CC151,CC152,CC153,CC154
				 ,CC155,CC156,CC157,CC158,CC159,CC15A,CC15B,CC15C,CC15D,CC15E
				 ,CC15F,CC160,CC161,CC162,CC163,CC164,CC165,CC166,CC167,CC168
				 ,CC169,CC16A,CC16B,CC16C,CC16D,CC16E,CC16F,CC170,CC171,CC172
				 ,CC173,CC174,CC175,CC176,CC177,CC178,CC179,CC17A,CC17B,CC17C
				 ,CC17D,CC17E,CC17F,CC180,CC181,CC182,CC183,CC184,CC185,CC186
				 ,CC187,CC188,CC189,CC18A,CC18B,CC18C,CC18D,CC18E,CC18F,CC190
				 ,CC191,CC192,CC193,CC194,CC195,CC196,CC197,CC198,CC199,CC19A
				 ,CC19B,CC19C,CC19D,CC19E,CC19F,CC1A0,CC1A1,CC1A2,CC1A3,CC1A4
				 ,CC1A5,CC1A6,CC1A7,CC1A8,CC1A9,CC1AA,CC1AB,CC1AC,CC1AD,CC1AE
				 ,CC1AF,CC1B0,CC1B1,CC1B2,CC1B3,CC1B4,CC1B5,CC1B6,CC1B7,CC1B8
				 ,CC1B9,CC1BA,CC1BB,CC1BC,CC1BD,CC1BE,CC1BF,CC1C0,CC1C1,CC1C2
				 ,CC1C3,CC1C4,CC1C5,CC1C6,CC1C7,CC1C8,CC1C9,CC1CA,CC1CB,CC1CC
				 ,CC1CD,CC1CE,CC1CF,CC1D0,CC1D1,CC1D2,CC1D3,CC1D4,CC1D5,CC1D6
				 ,CC1D7,CC1D8,CC1D9,CC1DA,CC1DB,CC1DC,CC1DD,CC1DE,CC1DF,CC1E0
				 ,CC1E1,CC1E2,CC1E3,CC1E4,CC1E5,CC1E6,CC1E7,CC1E8,CC1E9,CC1EA
				 ,CC1EB];

//Lot DC - - - - - - - - - - - - - - - - - - - - - - - - -
var DC001 = new SpotsInfo('DC','001',true,[0,0]);
var DC002 = new SpotsInfo('DC','002',true,[0,0]);
var DC003 = new SpotsInfo('DC','003',true,[0,0]);
var DC004 = new SpotsInfo('DC','004',true,[0,0]);
var DC005 = new SpotsInfo('DC','005',true,[0,0]);
var DC006 = new SpotsInfo('DC','006',true,[0,0]);
var DC007 = new SpotsInfo('DC','007',true,[0,0]);
var DC008 = new SpotsInfo('DC','008',true,[0,0]);
var DC009 = new SpotsInfo('DC','009',true,[0,0]);
var DC00A = new SpotsInfo('DC','00A',true,[0,0]);
var DC00B = new SpotsInfo('DC','00B',true,[0,0]);
var DC00C = new SpotsInfo('DC','00C',true,[0,0]);
var DC00D = new SpotsInfo('DC','00D',true,[0,0]);
var DC00E = new SpotsInfo('DC','00E',true,[0,0]);
var DC00F = new SpotsInfo('DC','00F',true,[0,0]);
var DC010 = new SpotsInfo('DC','010',true,[0,0]);
var DC011 = new SpotsInfo('DC','011',true,[0,0]);
var DC012 = new SpotsInfo('DC','012',true,[0,0]);
var DC013 = new SpotsInfo('DC','013',true,[0,0]);
var DC014 = new SpotsInfo('DC','014',true,[0,0]);
var DC015 = new SpotsInfo('DC','015',true,[0,0]);
var DC016 = new SpotsInfo('DC','016',true,[0,0]);
var DC017 = new SpotsInfo('DC','017',true,[0,0]);
var DC018 = new SpotsInfo('DC','018',true,[0,0]);
var DC019 = new SpotsInfo('DC','019',true,[0,0]);
var DC01A = new SpotsInfo('DC','01A',true,[0,0]);
var DC01B = new SpotsInfo('DC','01B',true,[0,0]);
var DC01C = new SpotsInfo('DC','01C',true,[0,0]);
var DC01D = new SpotsInfo('DC','01D',true,[0,0]);
var DC01E = new SpotsInfo('DC','01E',true,[0,0]);
var DC01F = new SpotsInfo('DC','01F',true,[0,0]);
var DC020 = new SpotsInfo('DC','020',true,[0,0]);
var DC021 = new SpotsInfo('DC','021',true,[0,0]);
var DC022 = new SpotsInfo('DC','022',true,[0,0]);
var DC023 = new SpotsInfo('DC','023',true,[0,0]);
var DC024 = new SpotsInfo('DC','024',true,[0,0]);
var DC025 = new SpotsInfo('DC','025',true,[0,0]);
var DC026 = new SpotsInfo('DC','026',true,[0,0]);
var DC027 = new SpotsInfo('DC','027',true,[0,0]);
var DC028 = new SpotsInfo('DC','028',true,[0,0]);
var DC029 = new SpotsInfo('DC','029',true,[0,0]);
var DC02A = new SpotsInfo('DC','02A',true,[0,0]);
var DC02B = new SpotsInfo('DC','02B',true,[0,0]);
var DC02C = new SpotsInfo('DC','02C',true,[0,0]);
var DC02D = new SpotsInfo('DC','02D',true,[0,0]);
var DC02E = new SpotsInfo('DC','02E',true,[0,0]);
var DC02F = new SpotsInfo('DC','02F',true,[0,0]);
var DC030 = new SpotsInfo('DC','030',true,[0,0]);
var DC031 = new SpotsInfo('DC','031',true,[0,0]);
var DC032 = new SpotsInfo('DC','032',true,[0,0]);
var DC033 = new SpotsInfo('DC','033',true,[0,0]);
var DC034 = new SpotsInfo('DC','034',true,[0,0]);
var DC035 = new SpotsInfo('DC','035',true,[0,0]);
var DC036 = new SpotsInfo('DC','036',true,[0,0]);
var DC037 = new SpotsInfo('DC','037',true,[0,0]);
var DC038 = new SpotsInfo('DC','038',true,[0,0]);
var DC039 = new SpotsInfo('DC','039',true,[0,0]);
var DC03A = new SpotsInfo('DC','03A',true,[0,0]);
var DC03B = new SpotsInfo('DC','03B',true,[0,0]);
var DC03C = new SpotsInfo('DC','03C',true,[0,0]);
var DC03D = new SpotsInfo('DC','03D',true,[0,0]);
var DC03E = new SpotsInfo('DC','03E',true,[0,0]);
var DC03F = new SpotsInfo('DC','03F',true,[0,0]);
var DC040 = new SpotsInfo('DC','040',true,[0,0]);
var DC041 = new SpotsInfo('DC','041',true,[0,0]);
var DC042 = new SpotsInfo('DC','042',true,[0,0]);
var DC043 = new SpotsInfo('DC','043',true,[0,0]);
var DC044 = new SpotsInfo('DC','044',true,[0,0]);
var DC045 = new SpotsInfo('DC','045',true,[0,0]);
var DC046 = new SpotsInfo('DC','046',true,[0,0]);
var DC047 = new SpotsInfo('DC','047',true,[0,0]);
var DC048 = new SpotsInfo('DC','048',true,[0,0]);
var DC049 = new SpotsInfo('DC','049',true,[0,0]);
var DC04A = new SpotsInfo('DC','04A',true,[0,0]);
var DC04B = new SpotsInfo('DC','04B',true,[0,0]);
var DC04C = new SpotsInfo('DC','04C',true,[0,0]);
var DC04D = new SpotsInfo('DC','04D',true,[0,0]);
var DC04E = new SpotsInfo('DC','04E',true,[0,0]);
var DC04F = new SpotsInfo('DC','04F',true,[0,0]);
var DC050 = new SpotsInfo('DC','050',true,[0,0]);
var DC051 = new SpotsInfo('DC','051',true,[0,0]);
var DC052 = new SpotsInfo('DC','052',true,[0,0]);
var DC053 = new SpotsInfo('DC','053',true,[0,0]);
var DC054 = new SpotsInfo('DC','054',true,[0,0]);
var DC055 = new SpotsInfo('DC','055',true,[0,0]);
var DC056 = new SpotsInfo('DC','056',true,[0,0]);
var DC057 = new SpotsInfo('DC','057',true,[0,0]);
var DC058 = new SpotsInfo('DC','058',true,[0,0]);
var DC059 = new SpotsInfo('DC','059',true,[0,0]);
var DC05A = new SpotsInfo('DC','05A',true,[0,0]);
var DC05B = new SpotsInfo('DC','05B',true,[0,0]);
var DC05C = new SpotsInfo('DC','05C',true,[0,0]);
var DC05D = new SpotsInfo('DC','05D',true,[0,0]);
var DC05E = new SpotsInfo('DC','05E',true,[0,0]);
var DC05F = new SpotsInfo('DC','05F',true,[0,0]);
var DC060 = new SpotsInfo('DC','060',true,[0,0]);
var DC061 = new SpotsInfo('DC','061',true,[0,0]);
var DC062 = new SpotsInfo('DC','062',true,[0,0]);
var DC063 = new SpotsInfo('DC','063',true,[0,0]);
var DC064 = new SpotsInfo('DC','064',true,[0,0]);
var DC065 = new SpotsInfo('DC','065',true,[0,0]);
var DC066 = new SpotsInfo('DC','066',true,[0,0]);
var DC067 = new SpotsInfo('DC','067',true,[0,0]);
var DC068 = new SpotsInfo('DC','068',true,[0,0]);
var DC069 = new SpotsInfo('DC','069',true,[0,0]);
var DC06A = new SpotsInfo('DC','06A',true,[0,0]);
var DC06B = new SpotsInfo('DC','06B',true,[0,0]);
var DC06C = new SpotsInfo('DC','06C',true,[0,0]);
var DC06D = new SpotsInfo('DC','06D',true,[0,0]);
var DC06E = new SpotsInfo('DC','06E',true,[0,0]);
var DC06F = new SpotsInfo('DC','06F',true,[0,0]);
var DC070 = new SpotsInfo('DC','070',true,[0,0]);
var DC071 = new SpotsInfo('DC','071',true,[0,0]);
var DC072 = new SpotsInfo('DC','072',true,[0,0]);
var DC073 = new SpotsInfo('DC','073',true,[0,0]);
var DC074 = new SpotsInfo('DC','074',true,[0,0]);
var DC075 = new SpotsInfo('DC','075',true,[0,0]);
var DC076 = new SpotsInfo('DC','076',true,[0,0]);
var DC077 = new SpotsInfo('DC','077',true,[0,0]);
var DC078 = new SpotsInfo('DC','078',true,[0,0]);
var DC079 = new SpotsInfo('DC','079',true,[0,0]);
var DC07A = new SpotsInfo('DC','07A',true,[0,0]);
var DC07B = new SpotsInfo('DC','07B',true,[0,0]);
var DC07C = new SpotsInfo('DC','07C',true,[0,0]);
var DC07D = new SpotsInfo('DC','07D',true,[0,0]);
var DC07E = new SpotsInfo('DC','07E',true,[0,0]);
var DC07F = new SpotsInfo('DC','07F',true,[0,0]);
var DC080 = new SpotsInfo('DC','080',true,[0,0]);
var DC081 = new SpotsInfo('DC','081',true,[0,0]);
var DC082 = new SpotsInfo('DC','082',true,[0,0]);
var DC083 = new SpotsInfo('DC','083',true,[0,0]);
var DC084 = new SpotsInfo('DC','084',true,[0,0]);
var DC085 = new SpotsInfo('DC','085',true,[0,0]);
var DC086 = new SpotsInfo('DC','086',true,[0,0]);
var DC087 = new SpotsInfo('DC','087',true,[0,0]);
var DC088 = new SpotsInfo('DC','088',true,[0,0]);
var DC089 = new SpotsInfo('DC','089',true,[0,0]);
var DC08A = new SpotsInfo('DC','08A',true,[0,0]);
var DC08B = new SpotsInfo('DC','08B',true,[0,0]);
var DC08C = new SpotsInfo('DC','08C',true,[0,0]);
var DC08D = new SpotsInfo('DC','08D',true,[0,0]);
var DC08E = new SpotsInfo('DC','08E',true,[0,0]);
var DC08F = new SpotsInfo('DC','08F',true,[0,0]);
var DC090 = new SpotsInfo('DC','090',true,[0,0]);
var DC091 = new SpotsInfo('DC','091',true,[0,0]);
var DC092 = new SpotsInfo('DC','092',true,[0,0]);
var DC093 = new SpotsInfo('DC','093',true,[0,0]);
var DC094 = new SpotsInfo('DC','094',true,[0,0]);
var DC095 = new SpotsInfo('DC','095',true,[0,0]);
var DC096 = new SpotsInfo('DC','096',true,[0,0]);
var DC097 = new SpotsInfo('DC','097',true,[0,0]);
var DC098 = new SpotsInfo('DC','098',true,[0,0]);
var DC099 = new SpotsInfo('DC','099',true,[0,0]);
var DC09A = new SpotsInfo('DC','09A',true,[0,0]);
var DC09B = new SpotsInfo('DC','09B',true,[0,0]);
var DC09C = new SpotsInfo('DC','09C',true,[0,0]);
var DC09D = new SpotsInfo('DC','09D',true,[0,0]);
var DC09E = new SpotsInfo('DC','09E',true,[0,0]);
var DC09F = new SpotsInfo('DC','09F',true,[0,0]);
var DC0A0 = new SpotsInfo('DC','0A0',true,[0,0]);
var DC0A1 = new SpotsInfo('DC','0A1',true,[0,0]);
var DC0A2 = new SpotsInfo('DC','0A2',true,[0,0]);
var DC0A3 = new SpotsInfo('DC','0A3',true,[0,0]);
var DC0A4 = new SpotsInfo('DC','0A4',true,[0,0]);
var DC0A5 = new SpotsInfo('DC','0A5',true,[0,0]);
var DC0A6 = new SpotsInfo('DC','0A6',true,[0,0]);
var DC0A7 = new SpotsInfo('DC','0A7',true,[0,0]);
var DC0A8 = new SpotsInfo('DC','0A8',true,[0,0]);
var DC0A9 = new SpotsInfo('DC','0A9',true,[0,0]);
var DC0AA = new SpotsInfo('DC','0AA',true,[0,0]);
var DC0AB = new SpotsInfo('DC','0AB',true,[0,0]);
var DC0AC = new SpotsInfo('DC','0AC',true,[0,0]);
var DC0AD = new SpotsInfo('DC','0AD',true,[0,0]);
var DC0AE = new SpotsInfo('DC','0AE',true,[0,0]);
var DC0AF = new SpotsInfo('DC','0AF',true,[0,0]);
var DC0B0 = new SpotsInfo('DC','0B0',true,[0,0]);
var DC0B1 = new SpotsInfo('DC','0B1',true,[0,0]);
var DC0B2 = new SpotsInfo('DC','0B2',true,[0,0]);
var DC0B3 = new SpotsInfo('DC','0B3',true,[0,0]);
var DC0B4 = new SpotsInfo('DC','0B4',true,[0,0]);
var DC0B5 = new SpotsInfo('DC','0B5',true,[0,0]);
var DC0B6 = new SpotsInfo('DC','0B6',true,[0,0]);
var DC0B7 = new SpotsInfo('DC','0B7',true,[0,0]);
var DC0B8 = new SpotsInfo('DC','0B8',true,[0,0]);
var DC0B9 = new SpotsInfo('DC','0B9',true,[0,0]);
var DC0BA = new SpotsInfo('DC','0BA',true,[0,0]);
var DC0BB = new SpotsInfo('DC','0BB',true,[0,0]);
var DC0BC = new SpotsInfo('DC','0BC',true,[0,0]);
var DC0BD = new SpotsInfo('DC','0BD',true,[0,0]);
var DC0BE = new SpotsInfo('DC','0BE',true,[0,0]);
var DC0BF = new SpotsInfo('DC','0BF',true,[0,0]);
var DC0C0 = new SpotsInfo('DC','0C0',true,[0,0]);
var DC0C1 = new SpotsInfo('DC','0C1',true,[0,0]);
var DC0C2 = new SpotsInfo('DC','0C2',true,[0,0]);
var DC0C3 = new SpotsInfo('DC','0C3',true,[0,0]);
var DC0C4 = new SpotsInfo('DC','0C4',true,[0,0]);
var DC0C5 = new SpotsInfo('DC','0C5',true,[0,0]);
var DC0C6 = new SpotsInfo('DC','0C6',true,[0,0]);
var DC0C7 = new SpotsInfo('DC','0C7',true,[0,0]);
var DC0C8 = new SpotsInfo('DC','0C8',true,[0,0]);
var DC0C9 = new SpotsInfo('DC','0C9',true,[0,0]);
var DC0CA = new SpotsInfo('DC','0CA',true,[0,0]);
var DC0CB = new SpotsInfo('DC','0CB',true,[0,0]);
var DC0CC = new SpotsInfo('DC','0CC',true,[0,0]);
var DC0CD = new SpotsInfo('DC','0CD',true,[0,0]);
var DC0CE = new SpotsInfo('DC','0CE',true,[0,0]);
var DC0CF = new SpotsInfo('DC','0CF',true,[0,0]);
var DC0D0 = new SpotsInfo('DC','0D0',true,[0,0]);
var DC0D1 = new SpotsInfo('DC','0D1',true,[0,0]);
var DC0D2 = new SpotsInfo('DC','0D2',true,[0,0]);
var DC0D3 = new SpotsInfo('DC','0D3',true,[0,0]);
var DC0D4 = new SpotsInfo('DC','0D4',true,[0,0]);
var DC0D5 = new SpotsInfo('DC','0D5',true,[0,0]);
var DC0D6 = new SpotsInfo('DC','0D6',true,[0,0]);
var DC0D7 = new SpotsInfo('DC','0D7',true,[0,0]);
var DC0D8 = new SpotsInfo('DC','0D8',true,[0,0]);
var DC0D9 = new SpotsInfo('DC','0D9',true,[0,0]);
var DC0DA = new SpotsInfo('DC','0DA',true,[0,0]);
var DC0DB = new SpotsInfo('DC','0DB',true,[0,0]);
var DC0DC = new SpotsInfo('DC','0DC',true,[0,0]);
var DC0DD = new SpotsInfo('DC','0DD',true,[0,0]);
var DC0DE = new SpotsInfo('DC','0DE',true,[0,0]);
var DC0DF = new SpotsInfo('DC','0DF',true,[0,0]);
var lotDCSpots = [DC001,DC002,DC003,DC004,DC005,DC006,DC007,DC008,DC009,DC00A
				 ,DC00B,DC00C,DC00D,DC00E,DC00F,DC010,DC011,DC012,DC013,DC014
				 ,DC015,DC016,DC017,DC018,DC019,DC01A,DC01B,DC01C,DC01D,DC01E
				 ,DC01F,DC020,DC021,DC022,DC023,DC024,DC025,DC026,DC027,DC028
				 ,DC029,DC02A,DC02B,DC02C,DC02D,DC02E,DC02F,DC030,DC031,DC032
				 ,DC033,DC034,DC035,DC036,DC037,DC038,DC039,DC03A,DC03B,DC03C
				 ,DC03D,DC03E,DC03F,DC040,DC041,DC042,DC043,DC044,DC045,DC046
				 ,DC047,DC048,DC049,DC04A,DC04B,DC04C,DC04D,DC04E,DC04F,DC050
				 ,DC051,DC052,DC053,DC054,DC055,DC056,DC057,DC058,DC059,DC05A
				 ,DC05B,DC05C,DC05D,DC05E,DC05F,DC060,DC061,DC062,DC063,DC064
				 ,DC065,DC066,DC067,DC068,DC069,DC06A,DC06B,DC06C,DC06D,DC06E
				 ,DC06F,DC070,DC071,DC072,DC073,DC074,DC075,DC076,DC077,DC078
				 ,DC079,DC07A,DC07B,DC07C,DC07D,DC07E,DC07F,DC080,DC081,DC082
				 ,DC083,DC084,DC085,DC086,DC087,DC088,DC089,DC08A,DC08B,DC08C
				 ,DC08D,DC08E,DC08F,DC090,DC091,DC092,DC093,DC094,DC095,DC096
				 ,DC097,DC098,DC099,DC09A,DC09B,DC09C,DC09D,DC09E,DC09F,DC0A0
				 ,DC0A1,DC0A2,DC0A3,DC0A4,DC0A5,DC0A6,DC0A7,DC0A8,DC0A9,DC0AA
				 ,DC0AB,DC0AC,DC0AD,DC0AE,DC0AF,DC0B0,DC0B1,DC0B2,DC0B3,DC0B4
				 ,DC0B5,DC0B6,DC0B7,DC0B8,DC0B9,DC0BA,DC0BB,DC0BC,DC0BD,DC0BE
				 ,DC0BF,DC0C0,DC0C1,DC0C2,DC0C3,DC0C4,DC0C5,DC0C6,DC0C7,DC0C8
				 ,DC0C9,DC0CA,DC0CB,DC0CC,DC0CD,DC0CE,DC0CF,DC0D0,DC0D1,DC0D2
				 ,DC0D3,DC0D4,DC0D5,DC0D6,DC0D7,DC0D8,DC0D9,DC0DA,DC0DB,DC0DC
				 ,DC0DD,DC0DE,DC0DF];

//Lot DD - - - - - - - - - - - - - - - - - - - - - - - - -
var DD001 = new SpotsInfo('DD','001',true,[0,0]);
var DD002 = new SpotsInfo('DD','002',true,[0,0]);
var DD003 = new SpotsInfo('DD','003',true,[0,0]);
var DD004 = new SpotsInfo('DD','004',true,[0,0]);
var DD005 = new SpotsInfo('DD','005',true,[0,0]);
var DD006 = new SpotsInfo('DD','006',true,[0,0]);
var DD007 = new SpotsInfo('DD','007',true,[0,0]);
var DD008 = new SpotsInfo('DD','008',true,[0,0]);
var DD009 = new SpotsInfo('DD','009',true,[0,0]);
var DD00A = new SpotsInfo('DD','00A',true,[0,0]);
var DD00B = new SpotsInfo('DD','00B',true,[0,0]);
var DD00C = new SpotsInfo('DD','00C',true,[0,0]);
var DD00D = new SpotsInfo('DD','00D',true,[0,0]);
var DD00E = new SpotsInfo('DD','00E',true,[0,0]);
var DD00F = new SpotsInfo('DD','00F',true,[0,0]);
var DD010 = new SpotsInfo('DD','010',true,[0,0]);
var DD011 = new SpotsInfo('DD','011',true,[0,0]);
var DD012 = new SpotsInfo('DD','012',true,[0,0]);
var DD013 = new SpotsInfo('DD','013',true,[0,0]);
var DD014 = new SpotsInfo('DD','014',true,[0,0]);
var DD015 = new SpotsInfo('DD','015',true,[0,0]);
var DD016 = new SpotsInfo('DD','016',true,[0,0]);
var DD017 = new SpotsInfo('DD','017',true,[0,0]);
var DD018 = new SpotsInfo('DD','018',true,[0,0]);
var DD019 = new SpotsInfo('DD','019',true,[0,0]);
var DD01A = new SpotsInfo('DD','01A',true,[0,0]);
var DD01B = new SpotsInfo('DD','01B',true,[0,0]);
var DD01C = new SpotsInfo('DD','01C',true,[0,0]);
var DD01D = new SpotsInfo('DD','01D',true,[0,0]);
var DD01E = new SpotsInfo('DD','01E',true,[0,0]);
var DD01F = new SpotsInfo('DD','01F',true,[0,0]);
var DD020 = new SpotsInfo('DD','020',true,[0,0]);
var DD021 = new SpotsInfo('DD','021',true,[0,0]);
var DD022 = new SpotsInfo('DD','022',true,[0,0]);
var DD023 = new SpotsInfo('DD','023',true,[0,0]);
var DD024 = new SpotsInfo('DD','024',true,[0,0]);
var DD025 = new SpotsInfo('DD','025',true,[0,0]);
var DD026 = new SpotsInfo('DD','026',true,[0,0]);
var DD027 = new SpotsInfo('DD','027',true,[0,0]);
var DD028 = new SpotsInfo('DD','028',true,[0,0]);
var DD029 = new SpotsInfo('DD','029',true,[0,0]);
var DD02A = new SpotsInfo('DD','02A',true,[0,0]);
var DD02B = new SpotsInfo('DD','02B',true,[0,0]);
var DD02C = new SpotsInfo('DD','02C',true,[0,0]);
var DD02D = new SpotsInfo('DD','02D',true,[0,0]);
var DD02E = new SpotsInfo('DD','02E',true,[0,0]);
var DD02F = new SpotsInfo('DD','02F',true,[0,0]);
var DD030 = new SpotsInfo('DD','030',true,[0,0]);
var DD031 = new SpotsInfo('DD','031',true,[0,0]);
var DD032 = new SpotsInfo('DD','032',true,[0,0]);
var DD033 = new SpotsInfo('DD','033',true,[0,0]);
var DD034 = new SpotsInfo('DD','034',true,[0,0]);
var DD035 = new SpotsInfo('DD','035',true,[0,0]);
var DD036 = new SpotsInfo('DD','036',true,[0,0]);
var DD037 = new SpotsInfo('DD','037',true,[0,0]);
var DD038 = new SpotsInfo('DD','038',true,[0,0]);
var DD039 = new SpotsInfo('DD','039',true,[0,0]);
var DD03A = new SpotsInfo('DD','03A',true,[0,0]);
var DD03B = new SpotsInfo('DD','03B',true,[0,0]);
var DD03C = new SpotsInfo('DD','03C',true,[0,0]);
var DD03D = new SpotsInfo('DD','03D',true,[0,0]);
var DD03E = new SpotsInfo('DD','03E',true,[0,0]);
var DD03F = new SpotsInfo('DD','03F',true,[0,0]);
var DD040 = new SpotsInfo('DD','040',true,[0,0]);
var DD041 = new SpotsInfo('DD','041',true,[0,0]);
var DD042 = new SpotsInfo('DD','042',true,[0,0]);
var DD043 = new SpotsInfo('DD','043',true,[0,0]);
var DD044 = new SpotsInfo('DD','044',true,[0,0]);
var DD045 = new SpotsInfo('DD','045',true,[0,0]);
var DD046 = new SpotsInfo('DD','046',true,[0,0]);
var lotDDSpots = [DD001,DD002,DD003,DD004,DD005,DD006,DD007,DD008,DD009,DD00A
				 ,DD00B,DD00C,DD00D,DD00E,DD00F,DD010,DD011,DD012,DD013,DD014
				 ,DD015,DD016,DD017,DD018,DD019,DD01A,DD01B,DD01C,DD01D,DD01E
				 ,DD01F,DD020,DD021,DD022,DD023,DD024,DD025,DD026,DD027,DD028
				 ,DD029,DD02A,DD02B,DD02C,DD02D,DD02E,DD02F,DD030,DD031,DD032
				 ,DD033,DD034,DD035,DD036,DD037,DD038,DD039,DD03A,DD03B,DD03C
				 ,DD03D,DD03E,DD03F,DD040,DD041,DD042,DD043,DD044,DD045,DD046
				 ];

//Lot EE - - - - - - - - - - - - - - - - - - - - - - - - -
var EE001 = new SpotsInfo('EE','001',true,[0,0]);
var EE002 = new SpotsInfo('EE','002',true,[0,0]);
var EE003 = new SpotsInfo('EE','003',true,[0,0]);
var EE004 = new SpotsInfo('EE','004',true,[0,0]);
var EE005 = new SpotsInfo('EE','005',true,[0,0]);
var EE006 = new SpotsInfo('EE','006',true,[0,0]);
var EE007 = new SpotsInfo('EE','007',true,[0,0]);
var EE008 = new SpotsInfo('EE','008',true,[0,0]);
var EE009 = new SpotsInfo('EE','009',true,[0,0]);
var EE00A = new SpotsInfo('EE','00A',true,[0,0]);
var EE00B = new SpotsInfo('EE','00B',true,[0,0]);
var EE00C = new SpotsInfo('EE','00C',true,[0,0]);
var EE00D = new SpotsInfo('EE','00D',true,[0,0]);
var EE00E = new SpotsInfo('EE','00E',true,[0,0]);
var EE00F = new SpotsInfo('EE','00F',true,[0,0]);
var EE010 = new SpotsInfo('EE','010',true,[0,0]);
var EE011 = new SpotsInfo('EE','011',true,[0,0]);
var EE012 = new SpotsInfo('EE','012',true,[0,0]);
var EE013 = new SpotsInfo('EE','013',true,[0,0]);
var EE014 = new SpotsInfo('EE','014',true,[0,0]);
var EE015 = new SpotsInfo('EE','015',true,[0,0]);
var EE016 = new SpotsInfo('EE','016',true,[0,0]);
var EE017 = new SpotsInfo('EE','017',true,[0,0]);
var EE018 = new SpotsInfo('EE','018',true,[0,0]);
var EE019 = new SpotsInfo('EE','019',true,[0,0]);
var EE01A = new SpotsInfo('EE','01A',true,[0,0]);
var EE01B = new SpotsInfo('EE','01B',true,[0,0]);
var EE01C = new SpotsInfo('EE','01C',true,[0,0]);
var EE01D = new SpotsInfo('EE','01D',true,[0,0]);
var EE01E = new SpotsInfo('EE','01E',true,[0,0]);
var EE01F = new SpotsInfo('EE','01F',true,[0,0]);
var EE020 = new SpotsInfo('EE','020',true,[0,0]);
var EE021 = new SpotsInfo('EE','021',true,[0,0]);
var EE022 = new SpotsInfo('EE','022',true,[0,0]);
var EE023 = new SpotsInfo('EE','023',true,[0,0]);
var EE024 = new SpotsInfo('EE','024',true,[0,0]);
var EE025 = new SpotsInfo('EE','025',true,[0,0]);
var EE026 = new SpotsInfo('EE','026',true,[0,0]);
var EE027 = new SpotsInfo('EE','027',true,[0,0]);
var EE028 = new SpotsInfo('EE','028',true,[0,0]);
var EE029 = new SpotsInfo('EE','029',true,[0,0]);
var EE02A = new SpotsInfo('EE','02A',true,[0,0]);
var EE02B = new SpotsInfo('EE','02B',true,[0,0]);
var EE02C = new SpotsInfo('EE','02C',true,[0,0]);
var EE02D = new SpotsInfo('EE','02D',true,[0,0]);
var EE02E = new SpotsInfo('EE','02E',true,[0,0]);
var EE02F = new SpotsInfo('EE','02F',true,[0,0]);
var EE030 = new SpotsInfo('EE','030',true,[0,0]);
var EE031 = new SpotsInfo('EE','031',true,[0,0]);
var EE032 = new SpotsInfo('EE','032',true,[0,0]);
var EE033 = new SpotsInfo('EE','033',true,[0,0]);
var EE034 = new SpotsInfo('EE','034',true,[0,0]);
var EE035 = new SpotsInfo('EE','035',true,[0,0]);
var EE036 = new SpotsInfo('EE','036',true,[0,0]);
var lotEESpots = [EE001,EE002,EE003,EE004,EE005,EE006,EE007,EE008,EE009,EE00A
				 ,EE00B,EE00C,EE00D,EE00E,EE00F,EE010,EE011,EE012,EE013,EE014
				 ,EE015,EE016,EE017,EE018,EE019,EE01A,EE01B,EE01C,EE01D,EE01E
				 ,EE01F,EE020,EE021,EE022,EE023,EE024,EE025,EE026,EE027,EE028
				 ,EE029,EE02A,EE02B,EE02C,EE02D,EE02E,EE02F,EE030,EE031,EE032
				 ,EE033,EE034,EE035,EE036];

//Lot FF - - - - - - - - - - - - - - - - - - - - - - - - -
var FF001 = new SpotsInfo('FF','001',true,[0,0]);
var FF002 = new SpotsInfo('FF','002',true,[0,0]);
var FF003 = new SpotsInfo('FF','003',true,[0,0]);
var FF004 = new SpotsInfo('FF','004',true,[0,0]);
var FF005 = new SpotsInfo('FF','005',true,[0,0]);
var FF006 = new SpotsInfo('FF','006',true,[0,0]);
var FF007 = new SpotsInfo('FF','007',true,[0,0]);
var FF008 = new SpotsInfo('FF','008',true,[0,0]);
var FF009 = new SpotsInfo('FF','009',true,[0,0]);
var FF00A = new SpotsInfo('FF','00A',true,[0,0]);
var FF00B = new SpotsInfo('FF','00B',true,[0,0]);
var FF00C = new SpotsInfo('FF','00C',true,[0,0]);
var FF00D = new SpotsInfo('FF','00D',true,[0,0]);
var FF00E = new SpotsInfo('FF','00E',true,[0,0]);
var FF00F = new SpotsInfo('FF','00F',true,[0,0]);
var FF010 = new SpotsInfo('FF','010',true,[0,0]);
var FF011 = new SpotsInfo('FF','011',true,[0,0]);
var FF012 = new SpotsInfo('FF','012',true,[0,0]);
var FF013 = new SpotsInfo('FF','013',true,[0,0]);
var FF014 = new SpotsInfo('FF','014',true,[0,0]);
var FF015 = new SpotsInfo('FF','015',true,[0,0]);
var FF016 = new SpotsInfo('FF','016',true,[0,0]);
var FF017 = new SpotsInfo('FF','017',true,[0,0]);
var FF018 = new SpotsInfo('FF','018',true,[0,0]);
var FF019 = new SpotsInfo('FF','019',true,[0,0]);
var FF01A = new SpotsInfo('FF','01A',true,[0,0]);
var FF01B = new SpotsInfo('FF','01B',true,[0,0]);
var FF01C = new SpotsInfo('FF','01C',true,[0,0]);
var FF01D = new SpotsInfo('FF','01D',true,[0,0]);
var FF01E = new SpotsInfo('FF','01E',true,[0,0]);
var FF01F = new SpotsInfo('FF','01F',true,[0,0]);
var FF020 = new SpotsInfo('FF','020',true,[0,0]);
var FF021 = new SpotsInfo('FF','021',true,[0,0]);
var FF022 = new SpotsInfo('FF','022',true,[0,0]);
var FF023 = new SpotsInfo('FF','023',true,[0,0]);
var FF024 = new SpotsInfo('FF','024',true,[0,0]);
var FF025 = new SpotsInfo('FF','025',true,[0,0]);
var FF026 = new SpotsInfo('FF','026',true,[0,0]);
var FF027 = new SpotsInfo('FF','027',true,[0,0]);
var FF028 = new SpotsInfo('FF','028',true,[0,0]);
var FF029 = new SpotsInfo('FF','029',true,[0,0]);
var FF02A = new SpotsInfo('FF','02A',true,[0,0]);
var FF02B = new SpotsInfo('FF','02B',true,[0,0]);
var FF02C = new SpotsInfo('FF','02C',true,[0,0]);
var FF02D = new SpotsInfo('FF','02D',true,[0,0]);
var FF02E = new SpotsInfo('FF','02E',true,[0,0]);
var FF02F = new SpotsInfo('FF','02F',true,[0,0]);
var FF030 = new SpotsInfo('FF','030',true,[0,0]);
var FF031 = new SpotsInfo('FF','031',true,[0,0]);
var FF032 = new SpotsInfo('FF','032',true,[0,0]);
var FF033 = new SpotsInfo('FF','033',true,[0,0]);
var FF034 = new SpotsInfo('FF','034',true,[0,0]);
var FF035 = new SpotsInfo('FF','035',true,[0,0]);
var FF036 = new SpotsInfo('FF','036',true,[0,0]);
var FF037 = new SpotsInfo('FF','037',true,[0,0]);
var FF038 = new SpotsInfo('FF','038',true,[0,0]);
var FF039 = new SpotsInfo('FF','039',true,[0,0]);
var FF03A = new SpotsInfo('FF','03A',true,[0,0]);
var FF03B = new SpotsInfo('FF','03B',true,[0,0]);
var FF03C = new SpotsInfo('FF','03C',true,[0,0]);
var FF03D = new SpotsInfo('FF','03D',true,[0,0]);
var FF03E = new SpotsInfo('FF','03E',true,[0,0]);
var FF03F = new SpotsInfo('FF','03F',true,[0,0]);
var FF040 = new SpotsInfo('FF','040',true,[0,0]);
var FF041 = new SpotsInfo('FF','041',true,[0,0]);
var FF042 = new SpotsInfo('FF','042',true,[0,0]);
var FF043 = new SpotsInfo('FF','043',true,[0,0]);
var FF044 = new SpotsInfo('FF','044',true,[0,0]);
var FF045 = new SpotsInfo('FF','045',true,[0,0]);
var FF046 = new SpotsInfo('FF','046',true,[0,0]);
var FF047 = new SpotsInfo('FF','047',true,[0,0]);
var FF048 = new SpotsInfo('FF','048',true,[0,0]);
var FF049 = new SpotsInfo('FF','049',true,[0,0]);
var FF04A = new SpotsInfo('FF','04A',true,[0,0]);
var FF04B = new SpotsInfo('FF','04B',true,[0,0]);
var FF04C = new SpotsInfo('FF','04C',true,[0,0]);
var FF04D = new SpotsInfo('FF','04D',true,[0,0]);
var FF04E = new SpotsInfo('FF','04E',true,[0,0]);
var FF04F = new SpotsInfo('FF','04F',true,[0,0]);
var FF050 = new SpotsInfo('FF','050',true,[0,0]);
var FF051 = new SpotsInfo('FF','051',true,[0,0]);
var FF052 = new SpotsInfo('FF','052',true,[0,0]);
var FF053 = new SpotsInfo('FF','053',true,[0,0]);
var FF054 = new SpotsInfo('FF','054',true,[0,0]);
var FF055 = new SpotsInfo('FF','055',true,[0,0]);
var FF056 = new SpotsInfo('FF','056',true,[0,0]);
var FF057 = new SpotsInfo('FF','057',true,[0,0]);
var FF058 = new SpotsInfo('FF','058',true,[0,0]);
var FF059 = new SpotsInfo('FF','059',true,[0,0]);
var FF05A = new SpotsInfo('FF','05A',true,[0,0]);
var FF05B = new SpotsInfo('FF','05B',true,[0,0]);
var FF05C = new SpotsInfo('FF','05C',true,[0,0]);
var FF05D = new SpotsInfo('FF','05D',true,[0,0]);
var FF05E = new SpotsInfo('FF','05E',true,[0,0]);
var FF05F = new SpotsInfo('FF','05F',true,[0,0]);
var FF060 = new SpotsInfo('FF','060',true,[0,0]);
var FF061 = new SpotsInfo('FF','061',true,[0,0]);
var FF062 = new SpotsInfo('FF','062',true,[0,0]);
var FF063 = new SpotsInfo('FF','063',true,[0,0]);
var FF064 = new SpotsInfo('FF','064',true,[0,0]);
var FF065 = new SpotsInfo('FF','065',true,[0,0]);
var FF066 = new SpotsInfo('FF','066',true,[0,0]);
var FF067 = new SpotsInfo('FF','067',true,[0,0]);
var FF068 = new SpotsInfo('FF','068',true,[0,0]);
var FF069 = new SpotsInfo('FF','069',true,[0,0]);
var FF06A = new SpotsInfo('FF','06A',true,[0,0]);
var FF06B = new SpotsInfo('FF','06B',true,[0,0]);
var FF06C = new SpotsInfo('FF','06C',true,[0,0]);
var FF06D = new SpotsInfo('FF','06D',true,[0,0]);
var FF06E = new SpotsInfo('FF','06E',true,[0,0]);
var FF06F = new SpotsInfo('FF','06F',true,[0,0]);
var FF070 = new SpotsInfo('FF','070',true,[0,0]);
var FF071 = new SpotsInfo('FF','071',true,[0,0]);
var FF072 = new SpotsInfo('FF','072',true,[0,0]);
var FF073 = new SpotsInfo('FF','073',true,[0,0]);
var FF074 = new SpotsInfo('FF','074',true,[0,0]);
var FF075 = new SpotsInfo('FF','075',true,[0,0]);
var FF076 = new SpotsInfo('FF','076',true,[0,0]);
var FF077 = new SpotsInfo('FF','077',true,[0,0]);
var FF078 = new SpotsInfo('FF','078',true,[0,0]);
var FF079 = new SpotsInfo('FF','079',true,[0,0]);
var FF07A = new SpotsInfo('FF','07A',true,[0,0]);
var FF07B = new SpotsInfo('FF','07B',true,[0,0]);
var FF07C = new SpotsInfo('FF','07C',true,[0,0]);
var FF07D = new SpotsInfo('FF','07D',true,[0,0]);
var FF07E = new SpotsInfo('FF','07E',true,[0,0]);
var FF07F = new SpotsInfo('FF','07F',true,[0,0]);
var FF080 = new SpotsInfo('FF','080',true,[0,0]);
var FF081 = new SpotsInfo('FF','081',true,[0,0]);
var FF082 = new SpotsInfo('FF','082',true,[0,0]);
var FF083 = new SpotsInfo('FF','083',true,[0,0]);
var FF084 = new SpotsInfo('FF','084',true,[0,0]);
var FF085 = new SpotsInfo('FF','085',true,[0,0]);
var FF086 = new SpotsInfo('FF','086',true,[0,0]);
var FF087 = new SpotsInfo('FF','087',true,[0,0]);
var FF088 = new SpotsInfo('FF','088',true,[0,0]);
var FF089 = new SpotsInfo('FF','089',true,[0,0]);
var FF08A = new SpotsInfo('FF','08A',true,[0,0]);
var FF08B = new SpotsInfo('FF','08B',true,[0,0]);
var FF08C = new SpotsInfo('FF','08C',true,[0,0]);
var FF08D = new SpotsInfo('FF','08D',true,[0,0]);
var FF08E = new SpotsInfo('FF','08E',true,[0,0]);
var FF08F = new SpotsInfo('FF','08F',true,[0,0]);
var FF090 = new SpotsInfo('FF','090',true,[0,0]);
var FF091 = new SpotsInfo('FF','091',true,[0,0]);
var FF092 = new SpotsInfo('FF','092',true,[0,0]);
var FF093 = new SpotsInfo('FF','093',true,[0,0]);
var FF094 = new SpotsInfo('FF','094',true,[0,0]);
var FF095 = new SpotsInfo('FF','095',true,[0,0]);
var FF096 = new SpotsInfo('FF','096',true,[0,0]);
var FF097 = new SpotsInfo('FF','097',true,[0,0]);
var FF098 = new SpotsInfo('FF','098',true,[0,0]);
var FF099 = new SpotsInfo('FF','099',true,[0,0]);
var FF09A = new SpotsInfo('FF','09A',true,[0,0]);
var FF09B = new SpotsInfo('FF','09B',true,[0,0]);
var FF09C = new SpotsInfo('FF','09C',true,[0,0]);
var FF09D = new SpotsInfo('FF','09D',true,[0,0]);
var FF09E = new SpotsInfo('FF','09E',true,[0,0]);
var FF09F = new SpotsInfo('FF','09F',true,[0,0]);
var FF0A0 = new SpotsInfo('FF','0A0',true,[0,0]);
var FF0A1 = new SpotsInfo('FF','0A1',true,[0,0]);
var FF0A2 = new SpotsInfo('FF','0A2',true,[0,0]);
var FF0A3 = new SpotsInfo('FF','0A3',true,[0,0]);
var FF0A4 = new SpotsInfo('FF','0A4',true,[0,0]);
var FF0A5 = new SpotsInfo('FF','0A5',true,[0,0]);
var FF0A6 = new SpotsInfo('FF','0A6',true,[0,0]);
var FF0A7 = new SpotsInfo('FF','0A7',true,[0,0]);
var FF0A8 = new SpotsInfo('FF','0A8',true,[0,0]);
var FF0A9 = new SpotsInfo('FF','0A9',true,[0,0]);
var FF0AA = new SpotsInfo('FF','0AA',true,[0,0]);
var FF0AB = new SpotsInfo('FF','0AB',true,[0,0]);
var FF0AC = new SpotsInfo('FF','0AC',true,[0,0]);
var FF0AD = new SpotsInfo('FF','0AD',true,[0,0]);
var FF0AE = new SpotsInfo('FF','0AE',true,[0,0]);
var FF0AF = new SpotsInfo('FF','0AF',true,[0,0]);
var FF0B0 = new SpotsInfo('FF','0B0',true,[0,0]);
var FF0B1 = new SpotsInfo('FF','0B1',true,[0,0]);
var FF0B2 = new SpotsInfo('FF','0B2',true,[0,0]);
var FF0B3 = new SpotsInfo('FF','0B3',true,[0,0]);
var FF0B4 = new SpotsInfo('FF','0B4',true,[0,0]);
var FF0B5 = new SpotsInfo('FF','0B5',true,[0,0]);
var FF0B6 = new SpotsInfo('FF','0B6',true,[0,0]);
var FF0B7 = new SpotsInfo('FF','0B7',true,[0,0]);
var FF0B8 = new SpotsInfo('FF','0B8',true,[0,0]);
var FF0B9 = new SpotsInfo('FF','0B9',true,[0,0]);
var FF0BA = new SpotsInfo('FF','0BA',true,[0,0]);
var FF0BB = new SpotsInfo('FF','0BB',true,[0,0]);
var FF0BC = new SpotsInfo('FF','0BC',true,[0,0]);
var FF0BD = new SpotsInfo('FF','0BD',true,[0,0]);
var FF0BE = new SpotsInfo('FF','0BE',true,[0,0]);
var FF0BF = new SpotsInfo('FF','0BF',true,[0,0]);
var FF0C0 = new SpotsInfo('FF','0C0',true,[0,0]);
var FF0C1 = new SpotsInfo('FF','0C1',true,[0,0]);
var FF0C2 = new SpotsInfo('FF','0C2',true,[0,0]);
var FF0C3 = new SpotsInfo('FF','0C3',true,[0,0]);
var FF0C4 = new SpotsInfo('FF','0C4',true,[0,0]);
var FF0C5 = new SpotsInfo('FF','0C5',true,[0,0]);
var FF0C6 = new SpotsInfo('FF','0C6',true,[0,0]);
var FF0C7 = new SpotsInfo('FF','0C7',true,[0,0]);
var FF0C8 = new SpotsInfo('FF','0C8',true,[0,0]);
var FF0C9 = new SpotsInfo('FF','0C9',true,[0,0]);
var FF0CA = new SpotsInfo('FF','0CA',true,[0,0]);
var FF0CB = new SpotsInfo('FF','0CB',true,[0,0]);
var FF0CC = new SpotsInfo('FF','0CC',true,[0,0]);
var FF0CD = new SpotsInfo('FF','0CD',true,[0,0]);
var FF0CE = new SpotsInfo('FF','0CE',true,[0,0]);
var FF0CF = new SpotsInfo('FF','0CF',true,[0,0]);
var FF0D0 = new SpotsInfo('FF','0D0',true,[0,0]);
var FF0D1 = new SpotsInfo('FF','0D1',true,[0,0]);
var FF0D2 = new SpotsInfo('FF','0D2',true,[0,0]);
var FF0D3 = new SpotsInfo('FF','0D3',true,[0,0]);
var FF0D4 = new SpotsInfo('FF','0D4',true,[0,0]);
var lotFFSpots = [FF001,FF002,FF003,FF004,FF005,FF006,FF007,FF008,FF009,FF00A
				 ,FF00B,FF00C,FF00D,FF00E,FF00F,FF010,FF011,FF012,FF013,FF014
				 ,FF015,FF016,FF017,FF018,FF019,FF01A,FF01B,FF01C,FF01D,FF01E
				 ,FF01F,FF020,FF021,FF022,FF023,FF024,FF025,FF026,FF027,FF028
				 ,FF029,FF02A,FF02B,FF02C,FF02D,FF02E,FF02F,FF030,FF031,FF032
				 ,FF033,FF034,FF035,FF036,FF037,FF038,FF039,FF03A,FF03B,FF03C
				 ,FF03D,FF03E,FF03F,FF040,FF041,FF042,FF043,FF044,FF045,FF046
				 ,FF047,FF048,FF049,FF04A,FF04B,FF04C,FF04D,FF04E,FF04F,FF050
				 ,FF051,FF052,FF053,FF054,FF055,FF056,FF057,FF058,FF059,FF05A
				 ,FF05B,FF05C,FF05D,FF05E,FF05F,FF060,FF061,FF062,FF063,FF064
				 ,FF065,FF066,FF067,FF068,FF069,FF06A,FF06B,FF06C,FF06D,FF06E
				 ,FF06F,FF070,FF071,FF072,FF073,FF074,FF075,FF076,FF077,FF078
				 ,FF079,FF07A,FF07B,FF07C,FF07D,FF07E,FF07F,FF080,FF081,FF082
				 ,FF083,FF084,FF085,FF086,FF087,FF088,FF089,FF08A,FF08B,FF08C
				 ,FF08D,FF08E,FF08F,FF090,FF091,FF092,FF093,FF094,FF095,FF096
				 ,FF097,FF098,FF099,FF09A,FF09B,FF09C,FF09D,FF09E,FF09F,FF0A0
				 ,FF0A1,FF0A2,FF0A3,FF0A4,FF0A5,FF0A6,FF0A7,FF0A8,FF0A9,FF0AA
				 ,FF0AB,FF0AC,FF0AD,FF0AE,FF0AF,FF0B0,FF0B1,FF0B2,FF0B3,FF0B4
				 ,FF0B5,FF0B6,FF0B7,FF0B8,FF0B9,FF0BA,FF0BB,FF0BC,FF0BD,FF0BE
				 ,FF0BF,FF0C0,FF0C1,FF0C2,FF0C3,FF0C4,FF0C5,FF0C6,FF0C7,FF0C8
				 ,FF0C9,FF0CA,FF0CB,FF0CC,FF0CD,FF0CE,FF0CF,FF0D0,FF0D1,FF0D2
				 ,FF0D3,FF0D4];

//Lot GA - - - - - - - - - - - - - - - - - - - - - - - - -
var GA001 = new SpotsInfo('GA','001',true,[0,0]);
var GA002 = new SpotsInfo('GA','002',true,[0,0]);
var GA003 = new SpotsInfo('GA','003',true,[0,0]);
var GA004 = new SpotsInfo('GA','004',true,[0,0]);
var GA005 = new SpotsInfo('GA','005',true,[0,0]);
var GA006 = new SpotsInfo('GA','006',true,[0,0]);
var GA007 = new SpotsInfo('GA','007',true,[0,0]);
var GA008 = new SpotsInfo('GA','008',true,[0,0]);
var GA009 = new SpotsInfo('GA','009',true,[0,0]);
var GA00A = new SpotsInfo('GA','00A',true,[0,0]);
var GA00B = new SpotsInfo('GA','00B',true,[0,0]);
var GA00C = new SpotsInfo('GA','00C',true,[0,0]);
var GA00D = new SpotsInfo('GA','00D',true,[0,0]);
var GA00E = new SpotsInfo('GA','00E',true,[0,0]);
var lotGASpots = [GA001,GA002,GA003,GA004,GA005,GA006,GA007,GA008,GA009,GA00A
				 ,GA00B,GA00C,GA00D,GA00E];

//Lot GG - - - - - - - - - - - - - - - - - - - - - - - - -
var GG001 = new SpotsInfo('GG','001',true,[0,0]);
var GG002 = new SpotsInfo('GG','002',true,[0,0]);
var GG003 = new SpotsInfo('GG','003',true,[0,0]);
var GG004 = new SpotsInfo('GG','004',true,[0,0]);
var GG005 = new SpotsInfo('GG','005',true,[0,0]);
var GG006 = new SpotsInfo('GG','006',true,[0,0]);
var GG007 = new SpotsInfo('GG','007',true,[0,0]);
var GG008 = new SpotsInfo('GG','008',true,[0,0]);
var GG009 = new SpotsInfo('GG','009',true,[0,0]);
var GG00A = new SpotsInfo('GG','00A',true,[0,0]);
var GG00B = new SpotsInfo('GG','00B',true,[0,0]);
var GG00C = new SpotsInfo('GG','00C',true,[0,0]);
var GG00D = new SpotsInfo('GG','00D',true,[0,0]);
var GG00E = new SpotsInfo('GG','00E',true,[0,0]);
var GG00F = new SpotsInfo('GG','00F',true,[0,0]);
var GG010 = new SpotsInfo('GG','010',true,[0,0]);
var GG011 = new SpotsInfo('GG','011',true,[0,0]);
var GG012 = new SpotsInfo('GG','012',true,[0,0]);
var GG013 = new SpotsInfo('GG','013',true,[0,0]);
var GG014 = new SpotsInfo('GG','014',true,[0,0]);
var GG015 = new SpotsInfo('GG','015',true,[0,0]);
var GG016 = new SpotsInfo('GG','016',true,[0,0]);
var GG017 = new SpotsInfo('GG','017',true,[0,0]);
var GG018 = new SpotsInfo('GG','018',true,[0,0]);
var GG019 = new SpotsInfo('GG','019',true,[0,0]);
var GG01A = new SpotsInfo('GG','01A',true,[0,0]);
var GG01B = new SpotsInfo('GG','01B',true,[0,0]);
var GG01C = new SpotsInfo('GG','01C',true,[0,0]);
var GG01D = new SpotsInfo('GG','01D',true,[0,0]);
var GG01E = new SpotsInfo('GG','01E',true,[0,0]);
var lotGGSpots = [GG001,GG002,GG003,GG004,GG005,GG006,GG007,GG008,GG009,GG00A
				 ,GG00B,GG00C,GG00D,GG00E,GG00F,GG010,GG011,GG012,GG013,GG014
				 ,GG015,GG016,GG017,GG018,GG019,GG01A,GG01B,GG01C,GG01D,GG01E
				 ];

//Lot HH - - - - - - - - - - - - - - - - - - - - - - - - -
var HH001 = new SpotsInfo('HH','001',true,[0,0]);
var HH002 = new SpotsInfo('HH','002',true,[0,0]);
var HH003 = new SpotsInfo('HH','003',true,[0,0]);
var HH004 = new SpotsInfo('HH','004',true,[0,0]);
var HH005 = new SpotsInfo('HH','005',true,[0,0]);
var HH006 = new SpotsInfo('HH','006',true,[0,0]);
var HH007 = new SpotsInfo('HH','007',true,[0,0]);
var HH008 = new SpotsInfo('HH','008',true,[0,0]);
var HH009 = new SpotsInfo('HH','009',true,[0,0]);
var HH00A = new SpotsInfo('HH','00A',true,[0,0]);
var HH00B = new SpotsInfo('HH','00B',true,[0,0]);
var HH00C = new SpotsInfo('HH','00C',true,[0,0]);
var HH00D = new SpotsInfo('HH','00D',true,[0,0]);
var HH00E = new SpotsInfo('HH','00E',true,[0,0]);
var HH00F = new SpotsInfo('HH','00F',true,[0,0]);
var HH010 = new SpotsInfo('HH','010',true,[0,0]);
var HH011 = new SpotsInfo('HH','011',true,[0,0]);
var HH012 = new SpotsInfo('HH','012',true,[0,0]);
var HH013 = new SpotsInfo('HH','013',true,[0,0]);
var HH014 = new SpotsInfo('HH','014',true,[0,0]);
var HH015 = new SpotsInfo('HH','015',true,[0,0]);
var HH016 = new SpotsInfo('HH','016',true,[0,0]);
var HH017 = new SpotsInfo('HH','017',true,[0,0]);
var HH018 = new SpotsInfo('HH','018',true,[0,0]);
var HH019 = new SpotsInfo('HH','019',true,[0,0]);
var HH01A = new SpotsInfo('HH','01A',true,[0,0]);
var HH01B = new SpotsInfo('HH','01B',true,[0,0]);
var HH01C = new SpotsInfo('HH','01C',true,[0,0]);
var HH01D = new SpotsInfo('HH','01D',true,[0,0]);
var HH01E = new SpotsInfo('HH','01E',true,[0,0]);
var HH01F = new SpotsInfo('HH','01F',true,[0,0]);
var HH020 = new SpotsInfo('HH','020',true,[0,0]);
var HH021 = new SpotsInfo('HH','021',true,[0,0]);
var HH022 = new SpotsInfo('HH','022',true,[0,0]);
var HH023 = new SpotsInfo('HH','023',true,[0,0]);
var HH024 = new SpotsInfo('HH','024',true,[0,0]);
var HH025 = new SpotsInfo('HH','025',true,[0,0]);
var HH026 = new SpotsInfo('HH','026',true,[0,0]);
var HH027 = new SpotsInfo('HH','027',true,[0,0]);
var HH028 = new SpotsInfo('HH','028',true,[0,0]);
var HH029 = new SpotsInfo('HH','029',true,[0,0]);
var HH02A = new SpotsInfo('HH','02A',true,[0,0]);
var HH02B = new SpotsInfo('HH','02B',true,[0,0]);
var HH02C = new SpotsInfo('HH','02C',true,[0,0]);
var HH02D = new SpotsInfo('HH','02D',true,[0,0]);
var HH02E = new SpotsInfo('HH','02E',true,[0,0]);
var HH02F = new SpotsInfo('HH','02F',true,[0,0]);
var HH030 = new SpotsInfo('HH','030',true,[0,0]);
var HH031 = new SpotsInfo('HH','031',true,[0,0]);
var HH032 = new SpotsInfo('HH','032',true,[0,0]);
var HH033 = new SpotsInfo('HH','033',true,[0,0]);
var HH034 = new SpotsInfo('HH','034',true,[0,0]);
var HH035 = new SpotsInfo('HH','035',true,[0,0]);
var HH036 = new SpotsInfo('HH','036',true,[0,0]);
var HH037 = new SpotsInfo('HH','037',true,[0,0]);
var HH038 = new SpotsInfo('HH','038',true,[0,0]);
var HH039 = new SpotsInfo('HH','039',true,[0,0]);
var HH03A = new SpotsInfo('HH','03A',true,[0,0]);
var HH03B = new SpotsInfo('HH','03B',true,[0,0]);
var HH03C = new SpotsInfo('HH','03C',true,[0,0]);
var HH03D = new SpotsInfo('HH','03D',true,[0,0]);
var HH03E = new SpotsInfo('HH','03E',true,[0,0]);
var HH03F = new SpotsInfo('HH','03F',true,[0,0]);
var HH040 = new SpotsInfo('HH','040',true,[0,0]);
var HH041 = new SpotsInfo('HH','041',true,[0,0]);
var HH042 = new SpotsInfo('HH','042',true,[0,0]);
var HH043 = new SpotsInfo('HH','043',true,[0,0]);
var HH044 = new SpotsInfo('HH','044',true,[0,0]);
var HH045 = new SpotsInfo('HH','045',true,[0,0]);
var HH046 = new SpotsInfo('HH','046',true,[0,0]);
var HH047 = new SpotsInfo('HH','047',true,[0,0]);
var lotHHSpots = [HH001,HH002,HH003,HH004,HH005,HH006,HH007,HH008,HH009,HH00A
				 ,HH00B,HH00C,HH00D,HH00E,HH00F,HH010,HH011,HH012,HH013,HH014
				 ,HH015,HH016,HH017,HH018,HH019,HH01A,HH01B,HH01C,HH01D,HH01E
				 ,HH01F,HH020,HH021,HH022,HH023,HH024,HH025,HH026,HH027,HH028
				 ,HH029,HH02A,HH02B,HH02C,HH02D,HH02E,HH02F,HH030,HH031,HH032
				 ,HH033,HH034,HH035,HH036,HH037,HH038,HH039,HH03A,HH03B,HH03C
				 ,HH03D,HH03E,HH03F,HH040,HH041,HH042,HH043,HH044,HH045,HH046
				 ,HH047];

//Lot JJ - - - - - - - - - - - - - - - - - - - - - - - - -
var JJ001 = new SpotsInfo('JJ','001',true,[0,0]);
var JJ002 = new SpotsInfo('JJ','002',true,[0,0]);
var JJ003 = new SpotsInfo('JJ','003',true,[0,0]);
var JJ004 = new SpotsInfo('JJ','004',true,[0,0]);
var JJ005 = new SpotsInfo('JJ','005',true,[0,0]);
var JJ006 = new SpotsInfo('JJ','006',true,[0,0]);
var JJ007 = new SpotsInfo('JJ','007',true,[0,0]);
var JJ008 = new SpotsInfo('JJ','008',true,[0,0]);
var JJ009 = new SpotsInfo('JJ','009',true,[0,0]);
var JJ00A = new SpotsInfo('JJ','00A',true,[0,0]);
var JJ00B = new SpotsInfo('JJ','00B',true,[0,0]);
var JJ00C = new SpotsInfo('JJ','00C',true,[0,0]);
var JJ00D = new SpotsInfo('JJ','00D',true,[0,0]);
var JJ00E = new SpotsInfo('JJ','00E',true,[0,0]);
var JJ00F = new SpotsInfo('JJ','00F',true,[0,0]);
var JJ010 = new SpotsInfo('JJ','010',true,[0,0]);
var JJ011 = new SpotsInfo('JJ','011',true,[0,0]);
var JJ012 = new SpotsInfo('JJ','012',true,[0,0]);
var JJ013 = new SpotsInfo('JJ','013',true,[0,0]);
var JJ014 = new SpotsInfo('JJ','014',true,[0,0]);
var JJ015 = new SpotsInfo('JJ','015',true,[0,0]);
var JJ016 = new SpotsInfo('JJ','016',true,[0,0]);
var JJ017 = new SpotsInfo('JJ','017',true,[0,0]);
var JJ018 = new SpotsInfo('JJ','018',true,[0,0]);
var JJ019 = new SpotsInfo('JJ','019',true,[0,0]);
var JJ01A = new SpotsInfo('JJ','01A',true,[0,0]);
var JJ01B = new SpotsInfo('JJ','01B',true,[0,0]);
var JJ01C = new SpotsInfo('JJ','01C',true,[0,0]);
var JJ01D = new SpotsInfo('JJ','01D',true,[0,0]);
var JJ01E = new SpotsInfo('JJ','01E',true,[0,0]);
var JJ01F = new SpotsInfo('JJ','01F',true,[0,0]);
var JJ020 = new SpotsInfo('JJ','020',true,[0,0]);
var JJ021 = new SpotsInfo('JJ','021',true,[0,0]);
var JJ022 = new SpotsInfo('JJ','022',true,[0,0]);
var JJ023 = new SpotsInfo('JJ','023',true,[0,0]);
var JJ024 = new SpotsInfo('JJ','024',true,[0,0]);
var JJ025 = new SpotsInfo('JJ','025',true,[0,0]);
var JJ026 = new SpotsInfo('JJ','026',true,[0,0]);
var JJ027 = new SpotsInfo('JJ','027',true,[0,0]);
var JJ028 = new SpotsInfo('JJ','028',true,[0,0]);
var JJ029 = new SpotsInfo('JJ','029',true,[0,0]);
var lotJJSpots = [JJ001,JJ002,JJ003,JJ004,JJ005,JJ006,JJ007,JJ008,JJ009,JJ00A
				 ,JJ00B,JJ00C,JJ00D,JJ00E,JJ00F,JJ010,JJ011,JJ012,JJ013,JJ014
				 ,JJ015,JJ016,JJ017,JJ018,JJ019,JJ01A,JJ01B,JJ01C,JJ01D,JJ01E
				 ,JJ01F,JJ020,JJ021,JJ022,JJ023,JJ024,JJ025,JJ026,JJ027,JJ028
				 ,JJ029];

