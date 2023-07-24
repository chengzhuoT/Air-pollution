var wms_layers = [];

var lyr_pmhk_clip_p2_Clip11_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "pmhk_clip_p2_Clip11",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/pmhk_clip_p2_Clip11_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12684141.606169, 2555355.082174, 12689353.905369, 2563338.244014]
                            })
                        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

lyr_pmhk_clip_p2_Clip11_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);
var layersList = [lyr_pmhk_clip_p2_Clip11_0,lyr_GoogleLabels_1];
