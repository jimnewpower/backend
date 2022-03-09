require('dotenv').config();
mapboxgl.accessToken = process.env.MAPBOX_API_KEY;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
    // style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
    // style: 'mapbox://styles/mapbox/satellite-v9', // style URL
    center: [-104.952, 39.667], // starting position [lng, lat]
    zoom: 12 // starting zoom
});

map.on('load', () => {
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });

    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': [
                [-104.9517302,39.6660634,1624.4000244140625],[-104.9517454,39.6660651,1624.4000244140625],[-104.9517912,39.6660701,1624.4000244140625],[-104.9517918,39.6660785,1623.8500366210938],[-104.9517482,39.6660987,1623.8500366210938],[-104.9517201,39.6660977,1622.3390836746776],[-104.9516797,39.6660746,1622.3390836746776],[-104.9516517,39.6660635,1621.37811852123],[-104.951608,39.6660535,1621.37811852123],[-104.9515774,39.6660542,1621.37811852123],[-104.9515293,39.6660664,1621.37811852123],[-104.9515177,39.6660461,1622.8890714676463],[-104.9515314,39.6659727,1622.8890714676463],[-104.9515399,39.6659311,1624.4000244140625],[-104.951552,39.6658797,1624.4000244140625],[-104.9515627,39.6658476,1624.4000244140625],[-104.9515829,39.665803,1624.4000244140625],[-104.9515867,39.6657732,1624.4000244140625],[-104.9515778,39.6657284,1624.4000244140625],[-104.9515751,39.6656977,1624.4000244140625],[-104.9515756,39.6656501,1624.4000244140625],[-104.9515751,39.66562,1624.4000244140625],[-104.9515732,39.6655769,1624.4000244140625],[-104.9515678,39.6655487,1625.050048828125],[-104.9515537,39.6655069,1625.050048828125],[-104.9515412,39.6654805,1625.7000732421875],[-104.951518,39.6654431,1625.7000732421875],[-104.9515048,39.6654179,1625.7000732421875],[-104.9514886,39.6653796,1625.7000732421875],[-104.9514819,39.6653527,1625.9500732421875],[-104.9514782,39.6653101,1625.9500732421875],[-104.9514731,39.6652802,1626.2000732421875],[-104.9514616,39.6652333,1626.2000732421875],[-104.9514499,39.6652044,1626.2000732421875],[-104.9514263,39.6651648,1626.2000732421875],[-104.9514032,39.665152,1626.2000732421875],[-104.9513575,39.6651534,1626.2000732421875],[-104.9513304,39.6651605,1626.2000732421875],[-104.9512947,39.6651807,1626.2000732421875],[-104.951271,39.6651953,1626.7000732421875],[-104.9512356,39.6652192,1626.7000732421875],[-104.9512069,39.6652285,1627.2000732421875],[-104.9511562,39.6652329,1627.2000732421875],[-104.9511249,39.6652303,1627.2000732421875],[-104.9510819,39.6652183,1627.2000732421875],[-104.9510547,39.6652071,1627.2000732421875],[-104.9510161,39.6651854,1627.2000732421875],[-104.9509902,39.6651727,1627.2000732421875],[-104.950951,39.6651561,1627.2000732421875],[-104.9509094,39.665144,1627.550048828125],[-104.9508237,39.6651241,1627.550048828125],[-104.9507775,39.6651185,1627.4000244140625],[-104.9507246,39.6651213,1627.4000244140625],[-104.9506929,39.6651214,1627.4000244140625],[-104.9506509,39.6651187,1627.4000244140625],[-104.9506292,39.6651061,1627.4000244140625],[-104.9506062,39.6650712,1627.4000244140625],[-104.9506018,39.6650433,1626.9000244140625],[-104.9506117,39.6649949,1626.9000244140625],[-104.9506211,39.6649661,1627.4000244140625],[-104.9506394,39.6649285,1627.4000244140625],[-104.9506534,39.6649021,1628.6500244140625],[-104.9506773,39.6648609,1628.6500244140625],[-104.9506888,39.6648313,1629.4000244140625],[-104.9506996,39.6647838,1629.4000244140625],[-104.9507067,39.6647531,1629.4000244140625],[-104.9507172,39.6647082,1629.4000244140625],[-104.9507212,39.6646786,1629.4000244140625],[-104.9507228,39.6646346,1629.4000244140625],[-104.9507278,39.6646066,1629.4000244140625],[-104.9507414,39.6645666,1629.4000244140625],[-104.95074,39.66454,1629.3500366210938],[-104.9507222,39.6644999,1629.3500366210938],[-104.9507109,39.6644735,1629.2500610351562],[-104.9506949,39.6644341,1629.2500610351562],[-104.9506915,39.6644063,1629.300048828125],[-104.9506973,39.6643623,1629.300048828125],[-104.9506997,39.6643339,1629.4000244140625],[-104.9507007,39.6642927,1629.4000244140625],[-104.9506984,39.6642639,1629.4000244140625],[-104.9506903,39.6642186,1629.4000244140625],[-104.9506896,39.6641886,1629.4000244140625],[-104.9506955,39.6641439,1629.4000244140625],[-104.9507007,39.6641141,1629.4000244140625],[-104.9507104,39.6640694,1629.4000244140625],[-104.9507155,39.6640343,1629.6500244140625],[-104.9507214,39.6639736,1629.6500244140625],[-104.9507259,39.6639399,1630.300048828125],[-104.9507337,39.6638995,1630.300048828125],[-104.9507396,39.6638683,1630.8500366210938],[-104.9507495,39.6638154,1630.8500366210938],[-104.9507545,39.6637839,1631.0],[-104.9507595,39.6637424,1631.0],[-104.9507613,39.6637129,1631.0],[-104.9507617,39.6636658,1631.0],[-104.9507584,39.6636306,1631.2000122070312],[-104.950748,39.6635721,1631.2000122070312],[-104.9507432,39.6635371,1631.4000244140625],[-104.9507389,39.6634905,1631.4000244140625],[-104.9507393,39.6634603,1631.4000244140625],[-104.9507446,39.6634161,1631.4000244140625],[-104.9507475,39.6633872,1631.4000244140625],[-104.950751,39.6633447,1631.4000244140625],[-104.9507515,39.6633169,1631.4000244140625],[-104.9507498,39.6632761,1631.4000244140625],[-104.9507444,39.6632456,1632.763964406315],[-104.9507302,39.6631947,1632.763964406315],[-104.9507269,39.6631642,1634.1264373567299],[-104.9507312,39.6631234,1634.1264373567299],[-104.9507333,39.6630962,1634.204457050414],[-104.950735,39.6630556,1634.204457050414],[-104.950734,39.6630271,1634.8180497023318],[-104.9507291,39.6629826,1634.8180497023318],[-104.9507273,39.6629516,1635.4334276330464],[-104.9507269,39.6629034,1635.4334276330464],[-104.9507265,39.6628729,1635.5788702101872],[-104.9507258,39.6628296,1635.5788702101872],[-104.9507267,39.6628,1635.8310708162999],[-104.9507301,39.6627545,1635.8310708162999],[-104.9507334,39.6627253,1636.1283710069752],[-104.9507398,39.6626831,1636.1283710069752],[-104.9507442,39.6626541,1636.2608050616227],[-104.9507508,39.6626092,1636.2608050616227],[-104.9507535,39.6625787,1636.283968968885],[-104.950755,39.6625323,1636.283968968885],[-104.9507558,39.6625021,1636.1504144044234],[-104.9507569,39.6624582,1636.1504144044234],[-104.9507579,39.6624283,1637.4584421270122],[-104.9507598,39.6623827,1637.4584421270122],[-104.9507612,39.6623524,1638.7000122070312],[-104.9507635,39.6623073,1638.7000122070312],[-104.9507593,39.6622794,1638.5],[-104.9507446,39.6622408,1638.5],[-104.9507419,39.6622121,1638.4500122070312],[-104.9507485,39.6621645,1638.4500122070312],[-104.9507518,39.6621349,1638.4000244140625],[-104.9507552,39.6620938,1638.4000244140625],[-104.9507577,39.6620646,1638.4000244140625],[-104.9507621,39.6620183,1638.4000244140625],[-104.9507645,39.6619879,1638.4000244140625],[-104.9507673,39.6619433,1638.4000244140625],[-104.9507675,39.6619124,1638.4000244140625],[-104.9507652,39.6618643,1638.4000244140625],[-104.9507597,39.6618337,1637.050048828125],[-104.9507454,39.6617897,1637.050048828125],[-104.950737,39.6617618,1635.7000732421875],[-104.9507261,39.6617221,1635.7000732421875],[-104.9507147,39.6616959,1634.8500366210938],[-104.9506915,39.6616574,1634.8500366210938],[-104.9506879,39.6616281,1634.0],[-104.9507004,39.6615789,1634.0],[-104.9507076,39.6615461,1634.0],[-104.9507169,39.6614971,1634.0],[-104.9507245,39.6614647,1634.0],[-104.9507381,39.6614169,1634.0],[-104.9507459,39.6613834,1634.0],[-104.9507556,39.661331,1634.0],[-104.9507531,39.6613006,1634.0],[-104.9507357,39.6612619,1634.0],[-104.9507311,39.6612317,1634.0],[-104.9507346,39.6611796,1634.0],[-104.9507367,39.6611472,1634.0],[-104.9507395,39.6611017,1634.0],[-104.9507427,39.6610698,1634.0],[-104.9507497,39.6610194,1634.0],[-104.9507512,39.660988,1634.1000366210938],[-104.9507488,39.6609441,1634.1000366210938],[-104.9507488,39.6609137,1634.2000732421875],[-104.9507512,39.6608661,1634.2000732421875],[-104.9507512,39.6608358,1634.2000732421875],[-104.9507488,39.6607925,1634.2000732421875],[-104.950742,39.6607658,1634.2000732421875],[-104.9507238,39.6607291,1634.2000732421875],[-104.9507163,39.6607019,1634.6000366210938],[-104.9507118,39.6606567,1634.6000366210938],[-104.9507012,39.660631,1635.0],[-104.9506741,39.6605991,1635.0],[-104.9506659,39.6605733,1635.0],[-104.9506686,39.6605282,1635.0],[-104.9506742,39.6604956,1635.0],[-104.9506881,39.660443,1635.0],[-104.9506931,39.6604101,1634.7999877929688],[-104.9506941,39.6603639,1634.7999877929688],[-104.9506898,39.6603354,1634.5999755859375],[-104.950676,39.660296,1634.5999755859375],[-104.9506724,39.6602676,1634.5999755859375],[-104.9506754,39.6602218,1634.5999755859375],[-104.9506757,39.6601915,1634.5999755859375],[-104.9506735,39.6601465,1634.5999755859375],[-104.9506667,39.6601186,1634.7999877929688],[-104.9506486,39.6600799,1634.7999877929688],[-104.9506415,39.660053,1635.0],[-104.9506387,39.6600108,1635.0],[-104.9506349,39.6599813,1635.0],[-104.9506264,39.659935,1635.0],[-104.9506215,39.6599058,1635.0],[-104.9506152,39.6598646,1635.0],[-104.9506074,39.6598363,1635.0],[-104.9505902,39.6597926,1635.0],[-104.9505862,39.6597621,1635.0],[-104.9505913,39.6597146,1635.0],[-104.9505991,39.6596866,1635.75],[-104.9506172,39.6596501,1635.75],[-104.9506264,39.6596228,1636.4500122070312],[-104.9506357,39.659577,1636.4500122070312],[-104.9506409,39.6595445,1636.75],[-104.9506473,39.6594924,1636.75],[-104.9506493,39.6594611,1637.0999755859375],[-104.950649,39.6594192,1637.0999755859375],[-104.9506497,39.6593892,1637.0999755859375],[-104.9506522,39.6593411,1637.0999755859375],[-104.9506462,39.659312,1637.0999755859375],[-104.9506259,39.6592729,1637.0999755859375],[-104.9506207,39.6592447,1637.0999755859375],[-104.9506255,39.6591996,1637.0999755859375],[-104.9506267,39.6591685,1637.25],[-104.9506257,39.6591206,1637.25],[-104.9506238,39.6590887,1638.1000366210938],[-104.9506193,39.6590409,1638.1000366210938],[-104.9506204,39.6590104,1638.800048828125],[-104.9506282,39.6589667,1638.800048828125],[-104.9506332,39.6589384,1638.800048828125],[-104.9506402,39.6588973,1638.800048828125],[-104.9506424,39.6588694,1638.800048828125],[-104.9506416,39.6588269,1638.800048828125],[-104.9506376,39.6587996,1638.9500122070312],[-104.950626,39.6587605,1638.9500122070312],[-104.9506225,39.6587308,1639.7000122070312],[-104.9506236,39.6586808,1639.7000122070312],[-104.9506138,39.6586547,1640.9000244140625],[-104.9505833,39.6586263,1640.9000244140625],[-104.9505801,39.6586027,1641.2999877929688],[-104.9506008,39.6585604,1641.2999877929688],[-104.9506108,39.6585324,1641.0999755859375],[-104.9506199,39.6584908,1641.0999755859375],[-104.9506227,39.6584618,1641.0999755859375],[-104.9506217,39.6584163,1641.0999755859375],[-104.9506239,39.6583876,1641.0999755859375],[-104.9506312,39.6583468,1641.0999755859375],[-104.9506332,39.6583124,1641.75],[-104.9506319,39.6582501,1641.75],[-104.9506287,39.6582136,1642.4000244140625],[-104.9506206,39.6581665,1642.4000244140625],[-104.9506189,39.6581362,1642.5],[-104.950622,39.6580925,1642.5],[-104.950623,39.6580643,1642.5999755859375],[-104.9506231,39.6580233,1642.5999755859375],[-104.9506248,39.6579948,1642.5999755859375],[-104.9506298,39.65795,1642.5999755859375],[-104.9506327,39.6579213,1642.5999755859375],[-104.9506361,39.6578798,1642.5999755859375],[-104.9506386,39.6578525,1642.5999755859375],[-104.9506425,39.6578122,1642.5999755859375],[-104.9506427,39.6577852,1642.5999755859375],[-104.9506396,39.6577449,1642.5999755859375],[-104.950637,39.6577163,1642.5499877929688],[-104.9506327,39.6576711,1642.5499877929688],[-104.9506316,39.6576371,1642.5499877929688],[-104.9506329,39.6575805,1642.5499877929688],[-104.9506352,39.6575464,1642.5999755859375],[-104.950641,39.6575007,1642.5999755859375],[-104.9506487,39.6574726,1642.5999755859375],[-104.950666,39.6574338,1642.5999755859375],[-104.9506753,39.6574075,1642.5999755859375],[-104.950686,39.6573673,1642.5999755859375],[-104.9506963,39.6573397,1642.3499755859375],[-104.9507166,39.6572969,1642.3499755859375],[-104.9507317,39.6572711,1642.0],[-104.9507567,39.6572363,1642.0],[-104.9507766,39.657214,1641.9500122070312],[-104.9508115,39.6571817,1641.9500122070312],[-104.9508371,39.657163,1642.0],[-104.9508792,39.6571389,1642.0],[-104.9509062,39.6571266,1642.0],[-104.9509454,39.6571137,1642.0],[-104.950972,39.6571078,1642.0],[-104.9510126,39.657103,1642.0],[-104.9510433,39.6571019,1642.0],[-104.9510947,39.6571033,1642.0],[-104.9511255,39.6571035,1642.0],[-104.9511664,39.6571024,1642.0],[-104.9511966,39.6571022,1641.5499877929688],[-104.9512462,39.6571026,1641.5499877929688],[-104.9512766,39.6571021,1641.2000122070312],[-104.9513184,39.6571004,1641.2000122070312],[-104.9513457,39.6571013,1641.300048828125],[-104.9513861,39.6571057,1641.300048828125],[-104.9514152,39.6571074,1641.300048828125],[-104.9514623,39.6571079,1641.300048828125],[-104.9514941,39.6571075,1641.300048828125],[-104.9515425,39.6571059,1641.300048828125],[-104.9515742,39.6571053,1641.300048828125],[-104.9516211,39.6571054,1641.300048828125],[-104.9516523,39.6571056,1641.300048828125],[-104.9516989,39.6571062,1641.300048828125],[-104.95173,39.6571074,1641.300048828125],[-104.9517763,39.6571104,1641.300048828125],[-104.9518087,39.6571115,1641.300048828125],[-104.9518595,39.6571117,1641.300048828125],[-104.9518908,39.657112,1641.300048828125],[-104.9519341,39.6571128,1641.300048828125],[-104.9519654,39.6571145,1640.4500122070312],[-104.9520159,39.657119,1640.4500122070312],[-104.9520476,39.6571219,1639.5499877929688],[-104.952092,39.6571262,1639.5499877929688],[-104.9521235,39.657128,1639.5],[-104.9521734,39.6571292,1639.5],[-104.952205,39.6571292,1639.5],[-104.9522495,39.6571278,1639.5],[-104.9522793,39.6571294,1639.5],[-104.952324,39.6571356,1639.5],[-104.9523538,39.6571389,1639.5],[-104.9523985,39.6571429,1639.5],[-104.9524305,39.6571428,1639.5],[-104.9524818,39.6571384,1639.5],[-104.9525131,39.6571345,1639.5],[-104.9525558,39.6571268,1639.5],[-104.9525853,39.6571245,1639.3500366210938],[-104.952631,39.657125,1639.3500366210938],[-104.9526628,39.6571249,1638.9500732421875],[-104.9527124,39.6571242,1638.9500732421875],[-104.9527453,39.6571226,1638.7000732421875],[-104.9527943,39.6571186,1638.7000732421875],[-104.9528252,39.6571177,1638.7000732421875],[-104.9528685,39.657119,1638.7000732421875],[-104.9528969,39.6571188,1638.7000732421875],[-104.9529384,39.6571172,1638.7000732421875],[-104.9529667,39.6571178,1638.7000732421875],[-104.95301,39.6571212,1638.7000732421875],[-104.9530422,39.6571241,1638.7000732421875],[-104.9530955,39.6571293,1638.7000732421875],[-104.9531298,39.6571307,1638.7000732421875],[-104.9531795,39.6571296,1638.7000732421875],[-104.9532105,39.6571293,1638.7000732421875],[-104.9532541,39.6571292,1638.7000732421875],[-104.9532824,39.6571304,1638.7000732421875],[-104.9533239,39.6571342,1638.7000732421875],[-104.953353,39.6571359,1638.800048828125],[-104.9533989,39.6571373,1638.800048828125],[-104.9534286,39.657136,1638.800048828125],[-104.9534718,39.6571308,1638.800048828125],[-104.9535052,39.6571287,1638.800048828125],[-104.9535623,39.6571276,1638.800048828125],[-104.9535958,39.657127,1638.9000244140625],[-104.9536395,39.6571261,1638.9000244140625],[-104.9536678,39.6571252,1638.9000244140625],[-104.9537093,39.6571234,1638.9000244140625],[-104.9537393,39.657122,1638.9000244140625],[-104.9537879,39.6571195,1638.9000244140625],[-104.9538216,39.6571183,1638.800048828125],[-104.9538741,39.657117,1638.800048828125],[-104.9539076,39.6571164,1638.7000732421875],[-104.9539556,39.6571159,1638.7000732421875],[-104.954007,39.6571225,1638.7000732421875],[-104.9541132,39.6571428,1638.7000732421875],[-104.9541649,39.6571553,1638.7000732421875],[-104.9542137,39.6571726,1638.7000732421875],[-104.9542435,39.6571767,1638.7000732421875],[-104.954284,39.657172,1638.7000732421875],[-104.9543121,39.6571657,1638.7293495211886],[-104.9543559,39.6571515,1638.7293495211886],[-104.9543844,39.6571467,1638.6486980538682],[-104.9544259,39.6571464,1638.6486980538682],[-104.9544549,39.6571453,1638.4944668749304],[-104.9545003,39.6571421,1638.4944668749304],[-104.9545295,39.6571325,1638.5005056557638],[-104.954572,39.6571069,1638.5005056557638],[-104.9546006,39.6570894,1638.2742452778339],[-104.9546442,39.6570625,1638.2742452778339],[-104.9546695,39.6570454,1637.997642686454],[-104.9547019,39.6570208,1637.997642686454],[-104.9547285,39.6570109,1637.934016453558],[-104.9547759,39.6570058,1637.934016453558],[-104.9548065,39.6570061,1637.8869564808756],[-104.9548508,39.6570122,1637.8869564808756],[-104.9548816,39.6570157,1637.9085772451945],[-104.9549295,39.6570202,1637.9085772451945],[-104.9549589,39.6570188,1638.0385818493226],[-104.9549989,39.6570101,1638.0385818493226],[-104.9550268,39.6570057,1637.7723886796389],[-104.9550701,39.6570011,1637.7723886796389],[-104.9551012,39.6570005,1636.54065932606],[-104.9551512,39.6570031,1636.54065932606],[-104.9551814,39.6570047,1635.7000732421875],[-104.9552222,39.6570067,1635.7000732421875],[-104.9552509,39.6570081,1635.7000732421875],[-104.9552963,39.65701,1635.7000732421875],[-104.9553252,39.6570123,1635.7000732421875],[-104.9553664,39.6570169,1635.7000732421875],[-104.9553955,39.6570213,1635.7000732421875],[-104.9554416,39.6570297,1635.7000732421875],[-104.9554717,39.6570332,1635.2000732421875],[-104.9555159,39.6570354,1635.2000732421875],[-104.9555467,39.6570374,1635.0000610351562],[-104.9555946,39.6570411,1635.0000610351562],[-104.9556212,39.6570525,1635.4000244140625],[-104.9556528,39.6570828,1635.4000244140625],[-104.9556679,39.6571065,1635.5],[-104.9556812,39.6571473,1635.5],[-104.955688,39.6571751,1635.5],[-104.9556951,39.6572177,1635.5],[-104.955701,39.6572467,1635.5],[-104.9557116,39.657291,1635.5],[-104.9557209,39.6573198,1635.4000244140625],[-104.9557382,39.6573616,1635.4000244140625],[-104.9557482,39.6573886,1635.6500244140625],[-104.9557609,39.6574278,1635.6500244140625],[-104.9557697,39.6574573,1636.0],[-104.9557833,39.6575067,1636.0],[-104.9557883,39.6575382,1636.0],[-104.9557896,39.6575833,1636.0],[-104.9557983,39.6576101,1636.0],[-104.9558227,39.6576453,1636.0],[-104.9558398,39.6576693,1636.0],[-104.9558666,39.6577057,1636.0],[-104.9558853,39.657729,1636.0],[-104.9559147,39.6577625,1636.0],[-104.9559352,39.6577834,1636.0],[-104.9559671,39.6578127,1636.0],[-104.955989,39.657833,1636.0],[-104.9560224,39.6578644,1636.0],[-104.9560413,39.6578897,1636.0],[-104.9560646,39.6579341,1636.0],[-104.9560793,39.6579618,1635.8500366210938],[-104.9561004,39.6580004,1635.8500366210938],[-104.9561159,39.658026,1635.5000610351562],[-104.9561412,39.6580641,1635.5000610351562],[-104.9561576,39.6580878,1635.300048828125],[-104.9561813,39.6581206,1635.300048828125],[-104.9562042,39.6581388,1635.300048828125],[-104.956249,39.6581603,1635.300048828125],[-104.9562748,39.6581781,1635.300048828125],[-104.9563071,39.6582098,1635.300048828125],[-104.956328,39.6582344,1634.9000244140625],[-104.9563581,39.6582765,1634.9000244140625],[-104.9563755,39.6583043,1634.5],[-104.9563976,39.6583459,1634.5],[-104.9564132,39.6583766,1634.5],[-104.956438,39.6584274,1634.5],[-104.9564517,39.6584581,1634.5],[-104.9564677,39.6584997,1634.5],[-104.9564784,39.6585292,1634.5],[-104.9564943,39.6585764,1634.5],[-104.9565028,39.6586062,1634.5],[-104.9565124,39.6586484,1634.5],[-104.9565118,39.6586768,1634.5],[-104.9565004,39.6587195,1634.5],[-104.9564955,39.6587478,1634.5],[-104.9564921,39.6587897,1634.5],[-104.9564884,39.6588201,1634.4500122070312],[-104.9564806,39.6588695,1634.4500122070312],[-104.9564745,39.6589023,1634.6500244140625],[-104.9564638,39.6589515,1634.6500244140625],[-104.9564578,39.6589836,1634.9000244140625],[-104.9564505,39.6590308,1634.9000244140625],[-104.9564468,39.6590607,1634.9000244140625],[-104.9564433,39.6591034,1634.9000244140625],[-104.956445,39.6591311,1634.9000244140625],[-104.9564538,39.6591715,1634.9000244140625],[-104.956459,39.6591992,1634.9000244140625],[-104.956466,39.659242,1634.9000244140625],[-104.9564691,39.6592708,1634.9000244140625],[-104.9564716,39.6593146,1634.9000244140625],[-104.9564736,39.6593451,1634.7000122070312],[-104.9564774,39.6593927,1634.7000122070312],[-104.9564786,39.6594245,1634.4500122070312],[-104.9564786,39.659472,1634.4500122070312],[-104.9564754,39.6595025,1634.3500366210938],[-104.9564659,39.6595463,1634.3500366210938],[-104.9564624,39.659575,1634.300048828125],[-104.9564614,39.6596175,1634.300048828125],[-104.9564611,39.6596485,1634.300048828125],[-104.9564609,39.659699,1634.300048828125],[-104.9564591,39.6597318,1634.300048828125],[-104.9564535,39.6597795,1634.300048828125],[-104.9564555,39.6598132,1633.9500122070312],[-104.9564667,39.6598667,1633.9500122070312],[-104.956474,39.659899,1633.3499755859375],[-104.9564847,39.6599427,1633.3499755859375],[-104.9564841,39.6599701,1633.0999755859375],[-104.9564719,39.6600087,1633.0999755859375],[-104.9564681,39.6600363,1633.0999755859375],[-104.9564692,39.6600805,1633.0999755859375],[-104.9564711,39.6601128,1633.1500244140625],[-104.956476,39.6601655,1633.1500244140625],[-104.9564795,39.6601974,1633.2000732421875],[-104.9564851,39.6602405,1633.2000732421875],[-104.956491,39.6602684,1633.1500244140625],[-104.956503,39.6603092,1633.1500244140625],[-104.9565039,39.6603371,1633.0499877929688],[-104.9564948,39.6603799,1633.0499877929688],[-104.9564915,39.6604086,1633.0],[-104.9564907,39.6604519,1633.0],[-104.9564934,39.6604818,1633.0],[-104.9565021,39.6605282,1633.0],[-104.9565054,39.6605572,1633.0],[-104.9565065,39.6605977,1633.0],[-104.9565069,39.6606258,1633.0],[-104.9565071,39.6606697,1633.0],[-104.9565054,39.6606988,1632.2000122070312],[-104.9565003,39.6607422,1632.2000122070312],[-104.9564992,39.6607708,1631.2000122070312],[-104.956501,39.6608131,1631.2000122070312],[-104.9565025,39.6608407,1632.0],[-104.9565053,39.6608811,1632.0],[-104.956509,39.6609108,1632.0],[-104.9565173,39.6609595,1632.0],[-104.9565227,39.6609893,1631.0],[-104.9565306,39.6610299,1631.0],[-104.956532,39.661057,1631.0],[-104.9565285,39.6610976,1631.0],[-104.9565216,39.661125,1630.8500366210938],[-104.9565043,39.6611669,1630.8500366210938],[-104.9564975,39.6611955,1630.7500610351562],[-104.9564944,39.6612398,1630.7500610351562],[-104.956492,39.6612705,1630.7500610351562],[-104.9564879,39.6613184,1630.7500610351562],[-104.9564859,39.6613499,1630.7000732421875],[-104.9564837,39.6613965,1630.7000732421875],[-104.9564817,39.6614257,1630.7000732421875],[-104.956478,39.6614666,1630.7000732421875],[-104.9564738,39.6614938,1630.7000732421875],[-104.9564649,39.6615345,1630.7000732421875],[-104.9564636,39.6615632,1630.7000732421875],[-104.9564685,39.6616088,1630.7000732421875],[-104.9564717,39.6616389,1630.550048828125],[-104.9564767,39.6616834,1630.550048828125],[-104.9564755,39.6617135,1630.1500244140625],[-104.9564673,39.6617593,1630.1500244140625],[-104.9564568,39.6617878,1630.050048828125],[-104.9564336,39.6618278,1630.050048828125],[-104.95642,39.6618546,1630.2000732421875],[-104.9564022,39.6618951,1630.2000732421875],[-104.956393,39.6619228,1630.2000732421875],[-104.9563829,39.6619652,1630.2000732421875],[-104.9563714,39.6619918,1630.2000732421875],[-104.956347,39.6620291,1630.2000732421875],[-104.9563321,39.6620536,1630.300048828125],[-104.9563122,39.6620897,1630.300048828125],[-104.9562961,39.6621127,1629.8500366210938],[-104.9562677,39.6621454,1629.8500366210938],[-104.956248,39.6621658,1629.2000122070312],[-104.9562172,39.6621941,1629.2000122070312],[-104.9561977,39.6622148,1629.0999755859375],[-104.9561701,39.6622484,1629.0999755859375],[-104.9561499,39.6622729,1629.0999755859375],[-104.956117,39.6623129,1629.0999755859375],[-104.9560947,39.6623368,1629.0999755859375],[-104.9560607,39.6623685,1629.0999755859375],[-104.9560402,39.6623899,1629.0999755859375],[-104.9560127,39.6624224,1629.0999755859375],[-104.9559964,39.6624453,1628.9500122070312],[-104.9559749,39.6624816,1628.9500122070312],[-104.9559553,39.6625021,1628.800048828125],[-104.9559176,39.6625274,1628.800048828125],[-104.9558942,39.6625462,1628.800048828125],[-104.9558616,39.6625772,1628.800048828125],[-104.9558447,39.6626033,1628.800048828125],[-104.9558267,39.6626502,1628.800048828125],[-104.9558108,39.6626779,1628.800048828125],[-104.9557811,39.662714,1628.800048828125],[-104.9557595,39.662736,1628.800048828125],[-104.9557242,39.6627659,1628.800048828125],[-104.9557009,39.6627867,1628.800048828125],[-104.9556661,39.6628191,1628.800048828125],[-104.9556493,39.6628427,1628.800048828125],[-104.9556337,39.6628809,1628.800048828125],[-104.9556244,39.6629085,1628.3500366210938],[-104.9556122,39.662953,1628.3500366210938],[-104.9556033,39.662983,1627.8500366210938],[-104.9555891,39.6630285,1627.8500366210938],[-104.9555746,39.6630599,1627.7500610351562],[-104.9555455,39.6631084,1627.7500610351562],[-104.9555285,39.6631377,1627.7000732421875],[-104.9555066,39.6631771,1627.7000732421875],[-104.9554908,39.6632045,1627.7000732421875],[-104.9554652,39.6632474,1627.7000732421875],[-104.9554478,39.6632742,1627.7000732421875],[-104.955421,39.6633118,1627.7000732421875],[-104.9554016,39.6633353,1627.7000732421875],[-104.9553702,39.6633682,1627.7000732421875],[-104.9553481,39.6634099,1626.800048828125],[-104.9553133,39.6635022,1626.800048828125],[-104.9552916,39.6635438,1625.9000244140625],[-104.9552613,39.6635764,1625.9000244140625],[-104.955249,39.6636007,1625.9000244140625],[-104.9552423,39.663641,1625.9000244140625],[-104.9552379,39.6636686,1625.9000244140625],[-104.9552314,39.6637113,1625.9000244140625],[-104.9552279,39.6637437,1625.8500366210938],[-104.955224,39.6637982,1625.8500366210938],[-104.9552233,39.6638306,1625.800048828125],[-104.955225,39.6638734,1625.800048828125],[-104.9552253,39.6639065,1625.800048828125],[-104.9552245,39.6639631,1625.800048828125],[-104.9552232,39.6639966,1625.800048828125],[-104.9552203,39.6640402,1625.800048828125],[-104.9552178,39.6640691,1625.800048828125],[-104.9552131,39.6641119,1625.800048828125],[-104.9552108,39.6641403,1625.800048828125],[-104.9552082,39.6641828,1625.800048828125],[-104.9552065,39.6642105,1625.800048828125],[-104.9552037,39.6642511,1625.800048828125],[-104.9551983,39.66428,1625.3500366210938],[-104.9551848,39.6643258,1625.3500366210938],[-104.9551763,39.6643551,1624.6500244140625],[-104.9551643,39.6643973,1624.6500244140625],[-104.955155,39.664425,1624.2000122070312],[-104.9551391,39.6644662,1624.2000122070312],[-104.9551265,39.664494,1624.0],[-104.9551045,39.6645361,1624.0],[-104.9550894,39.6645631,1624.0],[-104.9550658,39.6646018,1624.0],[-104.9550506,39.6646304,1624.0],[-104.9550283,39.6646774,1624.0],[-104.9550075,39.6647012,1624.0],[-104.9549674,39.6647253,1624.0],[-104.9549399,39.6647301,1624.0499877929688],[-104.9548975,39.66472,1624.0499877929688],[-104.9548719,39.6647095,1624.0999755859375],[-104.9548374,39.6646878,1624.0999755859375],[-104.9548137,39.6646736,1624.0999755859375],[-104.954777,39.6646526,1624.0999755859375],[-104.954748,39.6646366,1624.0499877929688],[-104.9546976,39.6646098,1624.0499877929688],[-104.9546667,39.6645999,1624.0],[-104.9546244,39.6645973,1624.0],[-104.9545929,39.6645916,1624.0499877929688],[-104.9545407,39.6645772,1624.0499877929688],[-104.954509,39.6645736,1624.0999755859375],[-104.954466,39.6645774,1624.0999755859375],[-104.9544368,39.6645787,1624.0999755859375],[-104.9543921,39.6645788,1624.0999755859375],[-104.9543632,39.6645785,1624.0999755859375],[-104.9543212,39.6645771,1624.0999755859375],[-104.9542908,39.6645757,1624.0999755859375],[-104.9542417,39.6645729,1624.0999755859375],[-104.9542116,39.6645699,1624.0999755859375],[-104.9541707,39.6645638,1624.0999755859375],[-104.954143,39.6645612,1624.0999755859375],[-104.9541011,39.6645595,1624.0999755859375],[-104.9540704,39.6645602,1624.4000244140625],[-104.9540204,39.6645643,1624.4000244140625],[-104.9539888,39.6645654,1624.7000732421875],[-104.9539439,39.6645646,1624.7000732421875],[-104.9539145,39.6645666,1624.7000732421875],[-104.9538709,39.6645732,1624.7000732421875],[-104.953841,39.6645773,1624.800048828125],[-104.953795,39.664583,1624.800048828125],[-104.9537657,39.6645838,1624.9000244140625],[-104.9537239,39.6645805,1624.9000244140625],[-104.953694,39.6645779,1624.9000244140625],[-104.9536461,39.6645734,1624.9000244140625],[-104.9536156,39.6645705,1624.9000244140625],[-104.9535721,39.6645665,1624.9000244140625],[-104.9535421,39.6645647,1624.9000244140625],[-104.9534957,39.6645635,1624.9000244140625],[-104.9534664,39.6645633,1624.9000244140625],[-104.9534248,39.6645641,1624.9000244140625],[-104.9533792,39.6645599,1625.1000366210938],[-104.9532838,39.6645468,1625.1000366210938],[-104.9532384,39.6645417,1625.4500122070312],[-104.9531978,39.6645398,1625.4500122070312],[-104.9531703,39.6645427,1625.5499877929688],[-104.9531284,39.6645537,1625.5499877929688],[-104.953097,39.6645577,1625.5],[-104.9530446,39.6645591,1625.5],[-104.9530102,39.6645588,1625.5],[-104.9529596,39.6645565,1625.5],[-104.9529289,39.6645556,1625.5],[-104.9528876,39.664555,1625.5],[-104.952859,39.6645556,1625.5],[-104.9528145,39.6645578,1625.5],[-104.9527784,39.6645587,1625.6000366210938],[-104.9527146,39.6645592,1625.6000366210938],[-104.9526798,39.6645606,1625.7000732421875],[-104.9526395,39.6645647,1625.7000732421875],[-104.9526099,39.6645702,1625.7000732421875],[-104.9525614,39.6645826,1625.7000732421875],[-104.9525306,39.6645924,1625.7000732421875],[-104.9524866,39.664609,1625.7000732421875],[-104.9524581,39.6646207,1625.7000732421875],[-104.9524166,39.6646391,1625.7000732421875],[-104.952391,39.664653,1625.7000732421875],[-104.9523555,39.6646762,1625.7000732421875],[-104.9523317,39.6646902,1625.7000732421875],[-104.9522955,39.6647087,1625.7000732421875],[-104.9522726,39.6647233,1625.7000732421875],[-104.9522398,39.6647484,1625.7000732421875],[-104.9522088,39.6647642,1625.7000732421875],[-104.9521483,39.6647864,1625.7000732421875],[-104.9521154,39.664801,1625.7000732421875],[-104.9520772,39.6648228,1625.7000732421875],[-104.9520518,39.6648367,1625.7000732421875],[-104.9520142,39.6648568,1625.7000732421875],[-104.9519873,39.6648645,1626.300048828125],[-104.9519442,39.6648677,1626.300048828125],[-104.9519169,39.6648745,1626.9000244140625],[-104.9518777,39.6648919,1626.9000244140625],[-104.9518531,39.6649051,1626.9000244140625],[-104.9518184,39.6649275,1626.9000244140625],[-104.9517936,39.6649402,1626.9000244140625],[-104.9517538,39.6649563,1626.9000244140625],[-104.9517274,39.6649676,1626.9000244140625],[-104.9516879,39.6649856,1626.9000244140625],[-104.9516656,39.6650036,1626.9000244140625],[-104.9516381,39.6650395,1626.9000244140625],[-104.9516197,39.6650625,1626.9000244140625],[-104.9515918,39.6650953,1626.9000244140625],[-104.9515739,39.6651199,1626.4000244140625],[-104.9515482,39.6651606,1626.4000244140625],[-104.9515376,39.6651891,1625.800048828125],[-104.9515316,39.665234,1625.800048828125],[-104.951528,39.6652634,1625.7000732421875],[-104.9515233,39.6653071,1625.7000732421875],[-104.9515227,39.6653358,1625.3500366210938],[-104.9515257,39.6653782,1625.3500366210938],[-104.951529,39.6654361,1625.0],[-104.9515358,39.6655673,1625.0],[-104.9515438,39.6656241,1624.8500366210938],[-104.951561,39.6656636,1624.8500366210938],[-104.9515647,39.6656914,1624.550048828125],[-104.9515585,39.6657353,1624.550048828125],[-104.9515541,39.6657669,1624.4000244140625],[-104.9515469,39.6658174,1624.4000244140625],[-104.951545,39.66585,1624.4000244140625],[-104.9515464,39.665897,1624.4000244140625],[-104.9515439,39.6659265,1624.4000244140625],[-104.9515348,39.6659681,1624.4000244140625],[-104.9515323,39.665997,1624.4000244140625],[-104.9515338,39.6660424,1624.4000244140625],[-104.9515341,39.6660719,1624.4000244140625],[-104.9515337,39.666115,1624.4000244140625],[-104.9515366,39.666143,1624.7000122070312],[-104.9515461,39.6661839,1624.7000122070312],[-104.9515588,39.6661864,1625.0],[-104.9515875,39.6661532,1625.0],[-104.9516014,39.6661287,1625.5481411054113],[-104.9516142,39.6660886,1625.5481411054113],[-104.9516341,39.6660793,1625.2481533124426],[-104.9516808,39.6660914,1625.2481533124426],[-104.9517101,39.6660916,1624.4000244140625],[-104.9517511,39.66608,1624.4000244140625],[-104.9517599,39.6660678,1624.4000244140625],[-104.9517451,39.6660427,1624.4000244140625],[-104.9517402,39.6660344,1624.4000244140625]
            ]}
        }
    });

    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#59e',
            'line-width': 5
        }
    });
        
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
    
    // add a sky layer that will show when the map is highly pitched
    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 5
        }
    });
});

map.addControl(new mapboxgl.FullscreenControl());
