var defaultFill = new ol.style.Fill({
   color: 'rgba(255,255,255,0.4)'
 });
 var defaultStroke = new ol.style.Stroke({
   color: '#3399CC',
   width: 1.25
 });
 var defaultSelectionFill = new ol.style.Fill({
   color: 'rgba(255,255,0,0.4)'
 });
 var defaultSelectionStroke = new ol.style.Stroke({
   color: '#FFFF00',
   width: 1.25
 });



                    var textStyleCache_kiambucounty={}
                    var clusterStyleCache_kiambucounty={}
                    var style_kiambucounty = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255,247,241,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_kiambucounty = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_hospitals={}
                    var clusterStyleCache_hospitals={}
                    var style_hospitals = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Icon({
                  scale: 0.027000,
                  anchorOrigin: 'top-left',
                  anchorXUnits: 'fraction',
                  anchorYUnits: 'fraction',
                  anchor: [0.5, 0.5],
                  src: "./data/styles/amenity=hospital35124110.svg",
                  rotation: 0.000000
            })
                        })
                        ];
                        var allStyles = [];
                        
        var labelText = feature.get("Name");
        
        var key = value + "_" + labelText;
        if (!textStyleCache_hospitals[key]){
            var text = new ol.style.Text({
                  font: '16.5px Calibri,sans-serif',
                  text: labelText,
                  fill: new ol.style.Fill({
                    color: "rgba(0, 0, 0, 255)"
                  }),
                  textBaseline: "middle",
                  textAlign: "center",
                  rotation: -0.0,
                  offsetX: 0.0,
                  offsetY: 0.0 
                });
            textStyleCache_hospitals[key] = new ol.style.Style({"text": text});
        }
        allStyles.push(textStyleCache_hospitals[key]);
        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_hospitals = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Icon({
                  scale: 0.027000,
                  anchorOrigin: 'top-left',
                  anchorXUnits: 'fraction',
                  anchorYUnits: 'fraction',
                  anchor: [0.5, 0.5],
                  src: "./data/styles/amenity=hospital25520401.svg",
                  rotation: 0.000000
            })
                        })
                        ]
                        var allStyles = [];
                        
        var labelText = feature.get("Name");
        
        var key = value + "_" + labelText;
        if (!textStyleCache_hospitals[key]){
            var text = new ol.style.Text({
                  font: '16.5px Calibri,sans-serif',
                  text: labelText,
                  fill: new ol.style.Fill({
                    color: "rgba(0, 0, 0, 255)"
                  }),
                  textBaseline: "middle",
                  textAlign: "center",
                  rotation: -0.0,
                  offsetX: 0.0,
                  offsetY: 0.0 
                });
            textStyleCache_hospitals[key] = new ol.style.Style({"text": text});
        }
        allStyles.push(textStyleCache_hospitals[key]);
        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_administrations={}
                    var clusterStyleCache_administrations={}
                    var style_administrations = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Icon({
                  scale: 0.019000,
                  anchorOrigin: 'top-left',
                  anchorXUnits: 'fraction',
                  anchorYUnits: 'fraction',
                  anchor: [0.5, 0.5],
                  src: "./data/styles/poi_embassy2410010.svg",
                  rotation: 0.000000
            })
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_administrations = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Icon({
                  scale: 0.019000,
                  anchorOrigin: 'top-left',
                  anchorXUnits: 'fraction',
                  anchorYUnits: 'fraction',
                  anchor: [0.5, 0.5],
                  src: "./data/styles/poi_embassy25520401.svg",
                  rotation: 0.000000
            })
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
                        type: 'base',
                        title: 'No base layer'
                    }),new ol.layer.Tile({
    type: 'base',
    title: 'OSM Mapnik',
    source: new ol.source.OSM(),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,'type':
                    'base-group', 'title': 'Base maps', layers: baseLayers});
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true, 'title': 'Overlays', layers: overlayLayers});
var lyr_kiambucounty = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_kiambucounty,
                    selectedStyle: selectionStyle_kiambucounty,
                    title: "kiambucounty",
                    id: "kiambucounty20170623055518551",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
kiambucounty_geojson_callback = function(geojson) {
                              lyr_kiambucounty.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_hospitals = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_hospitals,
                    selectedStyle: selectionStyle_hospitals,
                    title: "hospitals",
                    id: "hospitals20170623053733183",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
hospitals_geojson_callback = function(geojson) {
                              lyr_hospitals.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_administrations = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_administrations,
                    selectedStyle: selectionStyle_administrations,
                    title: "administrations",
                    id: "administrations20170623053731949",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
administrations_geojson_callback = function(geojson) {
                              lyr_administrations.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };

lyr_kiambucounty.setVisible(true);
lyr_hospitals.setVisible(true);
lyr_administrations.setVisible(true);for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}baseLayers[1].setVisible(true);
var layersList = [lyr_kiambucounty,lyr_hospitals,lyr_administrations];layersList.unshift(baseLayersGroup);
var printLayouts = [];
var legendData = {"kiambucounty20170623055518551": [{"href": "0_0.png", "title": ""}], "hospitals20170623053733183": [{"href": "1_0.png", "title": ""}], "administrations20170623053731949": [{"href": "2_0.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [4055776.858394, -150992.188285, 4158433.982018, -92271.475414];

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.ScaleLine({"minWidth": 64, "units": "metric"}),
new ol.control.Rotate({autoHide: false})]
});



var BasicApp = React.createClass({
  componentDidMount() {
    map.setTarget(ReactDOM.findDOMNode(this.refs.map));
    view = map.getView();
    view.fit(originalExtent, map.getSize());
    
  },
  _toggle(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  },
  _toggleTable() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  },
  _toggleWFST() {
    this._toggle(document.getElementById('wfst'));
  },
  _toggleQuery() {
    this._toggle(document.getElementById('query-panel'));
  },
  _toggleEdit() {
    this._toggle(document.getElementById('edit-tool-panel'));
  },
  _toggleAboutPanel() {
    this._toggle(document.getElementById('about-panel'));
  },
  _toggleChartPanel(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  },
  _navigationFunc() {
    ToolActions.activateTool(null, 'navigation');
  },
  render() {
    var options = [{text: 'Table', icon: 'list-alt', onClick: this._toggleTable.bind(this)},
{text: 'Query', icon: 'filter', onClick: this._toggleQuery.bind(this)},
{jsx: React.createElement(QGISPrint, {map:map, layouts:printLayouts, thumbnailPath: './resources/print/',})},
{jsx: React.createElement(AddLayer, {map:map})},
{exclude: true, jsx: React.createElement("a", {className:"navbar-brand", href:"#"}, "kiambu county development projects")}];
    return React.createElement("article", null,
      React.createElement(Toolbar, {options: options}
      ),
      React.createElement("div", {id: 'content'},
        React.createElement("div", {id: 'map', ref: 'map'}
          ,
React.createElement("div", {id: 'query-panel', className:'query-panel'},
                                          React.createElement(QueryBuilder, {map: map})
                                        ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {map: map, hover: false})
                                  )
        )
        ,
 React.createElement("div", {id: 'table-panel', className: 'attributes-table'},
                                          React.createElement(FeatureTable, {offset: [20, 20], ref: 'table', resizeTo: 'table-panel', layer: lyr_kiambucounty, pointZoom:16, map: map})
                                    ),
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:false, showDownload:false,
                                        showGroupContent:true, showZoomTo:false, allowReordering:false,
                                        allowFiltering:true, tipLabel:'layers', expandOnHover:true,
                                        downloadFormat:'GeoJSON', map:map})),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, expandOnHover:true, legendData:legendData})
                            )
      )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));


