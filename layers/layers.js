var wms_layers = [];

var lyr_interior_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'interior<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/interior_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-18389470.447376, 8859835.543300, -15155035.358024, 10580854.745800]
        })
    });

lyr_interior_0.setVisible(true);
var layersList = [lyr_interior_0];
