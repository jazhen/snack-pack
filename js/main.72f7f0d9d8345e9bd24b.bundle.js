(self["webpackChunksnack_pack"] = self["webpackChunksnack_pack"] || []).push([[179],{

/***/ 228:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ 646:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(228);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 575:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 913:
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ 860:
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ 206:
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(646);

var iterableToArray = __webpack_require__(860);

var unsupportedIterableToArray = __webpack_require__(323);

var nonIterableSpread = __webpack_require__(206);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 323:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(228);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ 36:
/***/ ((module) => {

var words = {
  3: ['fud', 'oft', 'las', 'mkt', 'irs', 'dev', 'ufs', 'mam', 'zoa', 'imi', 'pry', 'gal', 'ido', 'zod', 'vic', 'ara', 'jew', 'lig', 'pup', 'san', 'mar', 'nab', 'liq', 'rte', 'rie', 'usw', 'kex', 'mee', 'ler', 'fll', 'bpt', 'iou', 'nog', 'tty', 'pyr', 'oat', 'din', 'ate', 'cor', 'mtn', 'job', 'bat', 'umu', 'erg', 'moi', 'cfi', 'raj', 'abl', 'dig', 'yod', 'bed', 'wir', 'sfz', 'hau', 'ebb', 'meq', 'els', 'hat', 'puy', 'ers', 'lop', 'wow', 'sit', 'day', 'fec', 'fow', 'now', 'hak', 'dag', 'aly', 'nid', 'noo', 'ung', 'tub', 'ssi', 'urs', 'kif', 'rha', 'gro', 'pks', 'bid', 'tai', 'iph', 'che', 'pas', 'kef', 'dpt', 'rux', 'sei', 'bhp', 'cur', 'suu', 'esd', 'pya', 'sav', 'dsr', 'rig', 'prp', 'vod', 'tlo'],
  4: ['lain', 'cold', 'heir', 'pess', 'deus', 'cavu', 'putz', 'tymp', 'soul', 'mene', 'satd', 'pies', 'trac', 'yeas', 'drie', 'cpus', 'pung', 'mayo', 'tera', 'mayo', 'haku', 'scaw', 'wels', 'inks', 'siti', 'cowy', 'taos', 'merk', 'gwen', 'avar', 'chew', 'yhwh', 'jake', 'tyro', 'mary', 'till', 'duhr', 'coix', 'gear', 'isms', 'curr', 'waws', 'loof', 'lota', 'kuei', 'ourn', 'pyin', 'blin', 'luba', 'taur', 'yook', 'kohl', 'nump', 'surd', 'puxy', 'frog', 'hdbk', 'laik', 'weam', 'pere', 'exul', 'kuan', 'lurk', 'neck', 'mags', 'shri', 'whip', 'lipa', 'eyot', 'grat', 'jozy', 'hajj', 'nosy', 'fusc', 'taka', 'frap', 'snaw', 'crux', 'soko', 'apar', 'boar', 'moxa', 'insp', 'with', 'cain', 'emmy', 'pmsg', 'orad', 'daff', 'chap', 'deis', 'hoin', 'wint', 'rote', 'grit', 'perv', 'raja', 'adam', 'seed', 'dope'],
  5: ['rebop', 'kithe', 'sieur', 'armet', 'breed', 'cutch', 'quink', 'ditto', 'skegs', 'woomp', 'girsh', 'scote', 'quawk', 'cawky', 'preen', 'unlap', 'anzac', 'bozal', 'angle', 'rojak', 'voile', 'asana', 'whils', 'iliau', 'azine', 'torch', 'exter', 'kohen', 'afgod', 'repic', 'pattu', 'solio', 'borts', 'goloe', 'xxiii', 'pavid', 'smalt', 'polys', 'eruct', 'adawe', 'ahems', 'rabin', 'doges', 'booze', 'seeks', 'ilion', 'pinda', 'lyric', 'gumma', 'dairt', 'grant', 'oxane', 'weird', 'idion', 'tangi', 'orpit', 'clong', 'diner', 'therm', 'toyed', 'unlit', 'acron', 'nubby', 'maned', 'benin', 'rogan', 'badon', 'beati', 'woibe', 'yacal', 'awave', 'pinge', 'urbic', 'tibbu', 'ahong', 'snowl', 'apnea', 'earle', 'throu', 'ceint', 'hazan', 'iroko', 'sakha', 'tally', 'tushy', 'spool', 'omani', 'dials', 'blues', 'beaky', 'coeds', 'prado', 'heman', 'pedee', 'widow', 'teles', 'howes', 'jiffy', 'hosel', 'thong'],
  6: ['dextro', 'beshow', 'yelped', 'kristi', 'buzzle', 'wowing', 'cering', 'syddir', 'anorth', 'torrid', 'anglic', 'mercer', 'goujay', 'steals', 'nighly', 'kokako', 'nevoid', 'agawam', 'furlan', 'powdry', 'yeomen', 'moolet', 'starch', 'cebell', 'tirret', 'prowar', 'cuspal', 'evulse', 'gigunu', 'uncuth', 'tekiah', 'dacrya', 'frugal', 'chally', 'hieron', 'potoos', 'toggle', 'malate', 'clowns', 'mighty', 'speech', 'bardie', 'peaces', 'titled', 'obvert', 'quaint', 'magilp', 'acrook', 'kernos', 'waxand', 'indoin', 'lyfkie', 'samely', 'likens', 'sorned', 'kitbag', 'aljoba', 'gentil', 'thuban', 'apodal', 'bewrap', 'ripost', 'limbie', 'brunel', 'louvre', 'semmel', 'meated', 'douser', 'borneo', 'scapes', 'duress', 'oxhead', 'kyaung', 'nahane', 'moscow', 'dingle', 'hosier', 'whumps', 'frilly', 'cotyle', 'cyamid', 'repone', 'tughra', 'doomed', 'knacky', 'ketine', 'venule', 'vorant', 'mirfak', 'brahmi', 'clinic', 'kuhnia', 'dhanuk', 'apaise', 'debell', 'milled', 'girrit', 'santos', 'upbear', 'donnee'],
  7: ['flyways', 'thorias', 'pealike', 'healths', 'dassent', 'turfage', 'sparrow', 'latches', 'chirino', 'adopter', 'senaite', 'ellagic', 'scewing', 'sarcler', 'aseptic', 'satined', 'mammock', 'acritan', 'encamps', 'awarder', 'lysates', 'conchie', 'splurge', 'fattest', 'tsurugi', 'moolvee', 'pickery', 'relends', 'furtive', 'hylodes', 'bejesus', 'unmired', 'taxemes', 'souffle', 'carlins', 'bedizen', 'anankes', 'tweezed', 'poverty', 'ammonia', 'pigtail', 'gutweed', 'paretta', 'pinulus', 'solaria', 'asceses', 'semiraw', 'giraffa', 'trommel', 'elytral', 'palster', 'mongoyo', 'niduses', 'malines', 'phrygia', 'lambdas', 'heshvan', 'lapping', 'amidone', 'salomon', 'doeglic', 'chaotic', 'shachly', 'navahos', 'perplex', 'arnatta', 'baddock', 'ogtiern', 'cadette', 'laissez', 'banksia', 'facials', 'dyeweed', 'brokage', 'donship', 'mahmudi', 'flapper', 'belongs', 'cankery', 'yawnups', 'toughen', 'mousses', 'crisped', 'surdent', 'engages', 'serumal', 'totquot', 'fleshed', 'tombing', 'sartish', 'suricat', 'princox', 'refused', 'screigh', 'oinomel', 'wauking', 'actuate', 'detrect', 'dawdler', 'kummels'],
  8: ['lentisco', 'coltlike', 'surgical', 'menehune', 'voltaite', 'stardoms', 'hayricks', 'valylene', 'memorize', 'bikeways', 'coarsens', 'perlidae', 'knapscap', 'arsonist', 'oversock', 'dinarchy', 'myotasis', 'plighter', 'nonlocal', 'tightest', 'trekpath', 'mellowed', 'explorer', 'argental', 'computus', 'mellower', 'feetless', 'icebergs', 'biscayen', 'boltwork', 'morepeon', 'encrinic', 'overtook', 'footrill', 'lockwork', 'souvenir', 'spondean', 'kanarese', 'overvote', 'shrieved', 'inbreeds', 'crawlier', 'kneading', 'amoskeag', 'cosmisms', 'unroller', 'urosteon', 'apodemas', 'relaxant', 'pressage', 'assertor', 'shahzada', 'oscitate', 'shoelace', 'overcloy', 'seacraft', 'coxcombs', 'didrachm', 'melodica', 'unnimble', 'peladore', 'aureoled', 'nodosity', 'fenerate', 'relicary', 'detruded', 'bestiary', 'underbit', 'trilogic', 'treading', 'pedalier', 'entradas', 'unbasket', 'counters', 'resmelts', 'dutching', 'overwood', 'fishfall', 'augments', 'immunity', 'gunmetal', 'subcrest', 'learchus', 'rotatory', 'unexpert', 'chignons', 'bemeaned', 'duxelles', 'rewidens', 'unbolted', 'unfarced', 'mulctary', 'catproof', 'pureeing', 'bendways', 'aselgeia', 'birdless', 'catheter', 'extender', 'tubipora'],
  9: ['fratchety', 'intonacos', 'telemotor', 'anaglypta', 'creophagy', 'feedwater', 'wincopipe', 'dunpickle', 'timaliine', 'festology', 'thyrocele', 'wadsetted', 'deferrals', 'augurship', 'sinningly', 'oxidation', 'arrowleaf', 'condyloid', 'tellurize', 'hemolymph', 'omnitonal', 'scrapling', 'pyorrheas', 'emendates', 'mossyback', 'lampsilis', 'lazybones', 'momordica', 'libellula', 'outshoots', 'stiltlike', 'endemisms', 'annidalin', 'newspaper', 'beaconing', 'northered', 'panderess', 'timestamp', 'undercurl', 'polyprism', 'duelistic', 'sailmaker', 'stingtail', 'unsullied', 'visitador', 'anchusins', 'sentinels', 'thakurate', 'chimariko', 'boilerman', 'bluffness', 'prionidae', 'siderated', 'relatedly', 'missorted', 'accretive', 'caruncles', 'hemiteria', 'betulinic', 'precuring', 'inemulous', 'needleman', 'misrender', 'bacillary', 'leitmotiv', 'wheyfaces', 'wampished', 'connivant', 'shoehorns', 'culicinae', 'aulophyte', 'vergeress', 'staddling', 'intracity', 'muchachos', 'christian', 'notandums', 'dewlapped', 'waterloos', 'humanoids', 'lapboards', 'unsighing', 'metallify', 'confusing', 'hypothesi', 'bambuseae', 'pithiness', 'kalifates', 'aconitine', 'alpestral', 'unerrancy', 'bloviates', 'reimplant', 'corespect', 'polyhemic', 'abutments', 'doornboom', 'restudies', 'saturnize', 'frizzlier'],
  10: ['mediatrice', 'cheatingly', 'baldricked', 'devotement', 'surveiling', 'gillnetted', 'obviations', 'unamicable', 'timidities', 'viceroydom', 'backstairs', 'leishmania', 'ownerships', 'alabamians', 'unexempted', 'scapulette', 'gynandrous', 'unctuosity', 'overspeech', 'triticeous', 'colostrous', 'quixotries', 'callithrix', 'ketonimide', 'centennium', 'flosculous', 'euomphalid', 'bilberries', 'sprynesses', 'entreating', 'indifulvin', 'nemertinea', 'chiliadron', 'spinifexes', 'stagehouse', 'unstoicize', 'fouquieria', 'pythonical', 'noiseproof', 'illusioned', 'diblastula', 'unavowedly', 'coenotypic', 'despairful', 'unvariably', 'constitute', 'stolonlike', 'fleeringly', 'aftershine', 'konstantin', 'natterjack', 'combmaking', 'adamancies', 'biologists', 'absarokite', 'pyrocitric', 'dispiteous', 'ependymary', 'ungoverned', 'tonguelike', 'duodenitis', 'hypoacusia', 'prepuberal', 'unmiracled', 'unfacilely', 'palisading', 'trilateral', 'infringers', 'antiboxing', 'macrobiote', 'premaxilla', 'triacontad', 'fringefoot', 'mutilative', 'chronogram', 'matricular', 'infectress', 'reobtained', 'criticiser', 'phlogiston', 'transactor', 'giallolino', 'sulfoamide', 'conservacy', 'bowerwoman', 'holystoned', 'shepherded', 'jeanpaulia', 'astroscopy', 'astroblast', 'cristopher', 'squamosity', 'phlogopite', 'hellbender', 'tyrannical', 'unctuously', 'bradycauma', 'lepismidae', 'chattiness', 'eurythmies'],
  11: ['shoescraper', 'ferruginate', 'rhabdocoele', 'iridoplegia', 'imprecators', 'metanalysis', 'musicmonger', 'pedotrophic', 'oblivionist', 'lifeboatmen', 'incongruity', 'unconferred', 'reoxidation', 'sneezeproof', 'gardevisure', 'hemospastic', 'unsociality', 'kinesimeter', 'phalangitis', 'unvoracious', 'buffability', 'nondomestic', 'maraboutism', 'carilloneur', 'illuviation', 'anthropidae', 'debatefully', 'amphiboline', 'unstrangely', 'sinuosities', 'polychroism', 'utilitarian', 'countervail', 'chromotrope', 'neurosuture', 'epistilbite', 'nonplussing', 'antianxiety', 'billitonite', 'nonentitize', 'comestibles', 'qualifiable', 'centinormal', 'consumation', 'decomposers', 'dissiliency', 'seasonality', 'analyzation', 'perjurement', 'panicmonger', 'materialism', 'monophylety', 'phalangidan', 'genouillere', 'hyperborean', 'persulphate', 'outlaughing', 'unmerciably', 'decoagulate', 'unrepayable', 'judaization', 'rototilling', 'perioecians', 'criticastry', 'sandiferous', 'undexterous', 'scutibranch', 'jackknifing', 'tautologies', 'jackarooing', 'restorative', 'protocolist', 'militarized', 'geniculated', 'preoccupier', 'keelboatmen', 'albiflorous', 'coexistence', 'antaimerina', 'unpremature', 'pumpkinseed', 'inveracious', 'overfasting', 'struthiform', 'scammoniate', 'impediments', 'envelopment', 'hunchbacked', 'pseudobchia', 'whisperhood', 'unpatristic', 'oophorotomy', 'quadratical', 'upanishadic', 'undanceable', 'reprievable', 'middleclass', 'pithecology', 'fundatorial', 'auxoamylase'],
  12: ['defiguration', 'reimpatriate', 'uromycladium', 'pheasantwood', 'unstratified', 'pheasantwood', 'emulsibility', 'horizontical', 'electrophore', 'overstraiten', 'catechetical', 'brandenburgs', 'wonderfuller', 'chiropodists', 'antiroyalist', 'iambographer', 'pharyngismus', 'uncomprehend', 'fluotantalic', 'depreciatory', 'swainishness', 'invigoration', 'ultralenient', 'megalomaniac', 'eternalising', 'manifestness', 'cryptotaenia', 'socklessness', 'disbranching', 'metastrophic', 'uncommodious', 'fluoaluminic', 'datiscaceous', 'retinasphalt', 'unflamboyant', 'galvanograph', 'dissyllabize', 'wisecrackery', 'microbattery', 'interaccused', 'tautologised', 'ogcocephalus', 'meroplankton', 'neighbouress', 'nonseparable', 'multiprocess', 'telescopical', 'sanguifluous', 'cliffhanging', 'microanatomy', 'notharctidae', 'unpacifistic', 'herpetologic', 'lymphotrophy', 'quinquennial', 'gormandizers', 'jaundiceroot', 'ossification', 'vaporishness', 'damaskeening', 'wachenheimer', 'ascolichenes', 'fructiferous', 'anthologised', 'hoplomachist', 'aminoacetone', 'naturalesque', 'ratiocinates', 'phlebostasia', 'scoptophobia', 'reevacuation', 'amontillados', 'nonpractical', 'obliviscence', 'polyurethane', 'loganiaceous', 'craniography', 'sanguinolent', 'strangurious', 'myringectomy', 'overconsumed', 'bribeability', 'nontheoretic', 'premedicated', 'continuative', 'prehardening', 'underrunning', 'extramarital', 'pygobranchia', 'disimitation', 'biographical', 'debarkations', 'richardsonia', 'arsphenamine', 'traumatopnea', 'undistrusted', 'preceptually', 'cryptostegia', 'incumbencies', 'synaesthesia'],
  13: ['precontrolled', 'heterochrosis', 'inspirability', 'reinoculating', 'inconciliable', 'breaststroker', 'pyrolytically', 'semicarbonate', 'osteoblastoma', 'conceptualism', 'unsanctifying', 'unhumiliating', 'overintensify', 'parishionally', 'unconnectedly', 'tricarpellary', 'commutativity', 'nondiffusible', 'protoepiphyte', 'consolatorily', 'idealizations', 'ferthumlungur', 'discoblastula', 'confectionery', 'nondeprivable', 'reencountered', 'phylacterical', 'orthopyroxene', 'hydromagnetic', 'monopotassium', 'noninsularity', 'nontoleration', 'monosymmetric', 'nonsolidarity', 'unopprobrious', 'isoasparagine', 'indicatorinae', 'abnormalizing', 'untributarily', 'monometallist', 'participation', 'preadditional', 'microprograms', 'preresembling', 'cervicolabial', 'proliferating', 'suspectedness', 'improficience', 'nonextricably', 'monotropaceae', 'unretrievable', 'overprovision', 'prebankruptcy', 'unteacherlike', 'mispunctuated', 'decerebrating', 'reconfinement', 'convulsionary', 'protorosaurus', 'unsyllabified', 'semiconfluent', 'rearrangement', 'animalization', 'egomaniacally', 'panspermatism', 'ferricyanogen', 'unexhaustibly', 'mistranscript', 'commemorizing', 'affectibility', 'clamorousness', 'cobaltiferous', 'conjecturable', 'dehumidifying', 'unbridledness', 'depiedmontize', 'glyphographic', 'argumentatory', 'lophiostomate', 'descriptivism', 'tetrahydrated', 'nonpalliative', 'predefinition', 'duodecahedral', 'heterotactous', 'talocalcaneal', 'hippocratical', 'speleologists', 'verticilliose', 'venereologist', 'dolichocercic', 'antiatonement', 'ferroconcrete', 'unutilitarian', 'dimensuration', 'excardination', 'cheilostomata', 'reemphasizing', 'agonizingness', 'superseraphic'],
  14: ['unsalutariness', 'sacroposterior', 'ichthyophagize', 'hydrophilicity', 'polysalicylide', 'esophagoplegia', 'geographically', 'inestimability', 'disconnectedly', 'econometrician', 'monotropaceous', 'alexipharmacum', 'approvableness', 'camphorphorone', 'unmanipulatory', 'invariableness', 'sublieutenancy', 'undercapitaled', 'pseudobasidium', 'aircraftswoman', 'nonenunciative', 'melanchthonian', 'interwhistling', 'ungeologically', 'calcareousness', 'caliginousness', 'premonstration', 'recoverability', 'infraconscious', 'overdedicating', 'nonreformation', 'pittosporaceae', 'disemboguement', 'supersacrifice', 'initialization', 'albuminocholia', 'constitutional', 'blastophthoric', 'nonstatistical', 'apophthegmatic', 'bulbomedullary', 'sectarianising', 'illustrational', 'pseudoalkaloid', 'bituminization', 'quadrigeminous', 'overthwartwise', 'conglutinating', 'pseudopriestly', 'pseudosocially', 'prostatorrhoea', 'reconciliation', 'rehypothecator', 'tonsillectomic', 'miscounselling', 'invendibleness', 'inadvisability', 'unpreciousness', 'overcautiously', 'unperiphrastic', 'poluphloisboic', 'unfeasableness', 'prebendaryship', 'thermoremanent', 'traditionalist', 'dermosynovitis', 'applicableness', 'tautoisomerism', 'propitiousness', 'enchelycephali', 'rectifiability', 'softheadedness', 'undersaturated', 'nonnecessities', 'disarticulated', 'developability', 'computerizable', 'ambilaterality', 'nonconflicting', 'overtheorizing', 'intelligencing', 'nonserviential', 'electrophysics', 'praeacetabular', 'zoogeographies', 'unituberculate', 'holoptychiidae', 'imperturbation', 'subexpressions', 'nonpsychologic', 'ichthyophagist', 'cataleptically', 'drearisomeness', 'misappellation', 'pylorostenosis', 'nonparishioner', 'trachodontidae', 'refederalizing', 'untransferring', 'octophthalmous'],
  15: ['conspicuousness', 'costoclavicular', 'preinvestigator', 'proconventional', 'myxothallophyta', 'acetylcellulose', 'untouchableness', 'reconcentrating', 'pseudoproboscis', 'unsophistically', 'discontinuances', 'blockaderunning', 'scribaciousness', 'pinguinitescent', 'uninhibitedness', 'thoracostenosis', 'autoproteolysis', 'nonhereditarily', 'phenomenalizing', 'semicentenaries', 'nonbenevolently', 'thoroughgoingly', 'oryctognostical', 'ungesticulating', 'unprecedentedly', 'photofluorogram', 'semiministerial', 'hepatoumbilical', 'epigrammatising', 'superlikelihood', 'microprogrammed', 'rehypothecation', 'electrostatical', 'noninflammatory', 'pseudambulacrum', 'nonrelativeness', 'sympathicoblast', 'unintelligently', 'proselytisation', 'trichloroethane', 'superarrogantly', 'prohibitionists', 'phytochemically', 'noncriticalness', 'ungeometrically', 'pseudometameric', 'supernaturaldom', 'platycephalidae', 'interjectionize', 'antispeculation', 'overnationalize', 'hematonephrosis', 'comptrollership', 'megalodactylous', 'paleopsychology', 'prohibitionists', 'paradoxographer', 'brachycephalies', 'anthropographic', 'thermostability', 'unforeshortened', 'categoricalness', 'interinhibitive', 'hyperconfidence', 'undecayableness', 'amblycephalidae', 'unquicksilvered', 'nonconventional', 'galvanomagnetic', 'hystricomorphic', 'daguerreotyping', 'simplifications', 'exappendiculate', 'paronomasiastic', 'unpendulousness', 'scientistically', 'christianiadeal', 'unirritableness', 'pseudonavicella', 'electrothanasia', 'contragredience', 'heterodactylous', 'unacquirability', 'unsophisticated', 'unarbitrariness', 'prejudicialness', 'circularisation', 'plasmaphaeresis', 'malconstruction', 'intercessionary', 'pericanalicular', 'violinistically', 'tranquilization', 'antihierarchies', 'nonintervention', 'irresolubleness', 'regrettableness', 'insurrectionise', 'circumesophagal', 'nondiaphanously'],
  16: ['nonnullification', 'preaccommodating', 'superaccumulated', 'bipotentialities', 'impracticability', 'apogeotropically', 'monochlorbenzene', 'syncategorematic', 'cystoepithelioma', 'erythrocytometry', 'underventilating', 'multiplicatively', 'destigmatization', 'counterassertion', 'nonsynchronously', 'achroodextrinase', 'incombustibility', 'chromatoptometer', 'psychopannychism', 'retrovaccination', 'nonidiomatically', 'testimonialising', 'pseudoarticulate', 'semicapitalistic', 'sunnyheartedness', 'nonsequestration', 'superabomination', 'autoelectrolytic', 'superficialities', 'phototachometric', 'pneumatorrhachis', 'superfibrination', 'unattractiveness', 'peronosporaceous', 'depreciatoriness', 'caprimulgiformes', 'overfaithfulness', 'nonmicroscopical', 'underdevelopment', 'nonseditiousness', 'neuropsychiatric', 'archecclesiastic', 'disconcertedness', 'destigmatization', 'coadministration', 'frictionlessness', 'unacquaintedness', 'overthoughtfully', 'scapulovertebral', 'pseudocharitably', 'adenopharyngitis', 'temporaneousness', 'palingenetically', 'disentanglements', 'unmarvellousness', 'sulfonephthalein', 'oversufficiently', 'unpictorialising', 'neuropathologist', 'intermuscularity', 'roentgenographic', 'consanguineously', 'intercessionment', 'recommendability', 'transitionalness', 'lymphadenectasia', 'microlepidoptera', 'monocotyledonous', 'zarathustrianism', 'extemporaneously', 'soundheartedness', 'roentgenoscopies', 'schoolmistresses', 'unsimultaneously', 'discriminational', 'incorporatorship', 'cuprodescloizite', 'periencephalitis', 'hedriophthalmous', 'undetestableness', 'interligamentary', 'nontraditionally', 'chromolithograph', 'prescriptibility', 'nondependability', 'posthypnotically', 'undeceivableness', 'epicoracohumeral', 'pseudotetrameral', 'overfaithfulness', 'semidilapidation', 'metroperitonitis', 'pseudoastringent', 'caducibranchiate', 'unenrichableness', 'hydrocharidaceae', 'diphyllobothrium', 'sinistrocerebral', 'pregratification', 'antiabolitionist'],
  17: ['micrometeorograph', 'inagglutinability', 'noncontrollablely', 'underproportioned', 'underregistration', 'inquisitorialness', 'noncollapsibility', 'predisappointment', 'ceratostomataceae', 'overdefensiveness', 'cerebromeningitis', 'cephalomeningitis', 'environmentalists', 'overnationalizing', 'anticeremonialism', 'dietotherapeutics', 'nonderogatoriness', 'peripylephlebitis', 'lumpenproletariat', 'subtrochleariform', 'conjecturableness', 'incontaminateness', 'interdisciplinary', 'vocationalization', 'cosmopolitanising', 'decarboxylization', 'overembellishment', 'anthropogeography', 'nonconspiratorial', 'noncircuitousness', 'paleichthyologist', 'overimaginatively', 'triakisoctahedrid', 'revolutionariness', 'diphenylhydantoin', 'uncompassionating', 'microrheometrical', 'neurotherapeutics', 'hyperleucocytotic', 'superaccurateness', 'transillumination', 'dextrosinistrally', 'disconcertingness', 'preaggressiveness', 'prediscontentment', 'multidisciplinary', 'latitudinarianisn', 'scapuloclavicular', 'preadministration', 'semireflexiveness', 'counterenthusiasm', 'photojournalistic', 'latitudinarianisn', 'supermetropolitan', 'magnetophonograph', 'balanoblennorrhea', 'celioparacentesis', 'chromophotography', 'noncensoriousness', 'overfavorableness', 'pseudocourteously', 'recrystallization', 'consubstantiality', 'appendiculariidae', 'incompletableness', 'neurofibromatosis', 'simpleheartedness', 'nonfactitiousness', 'nonsalubriousness', 'unconciliatedness', 'panecclesiastical', 'tetranitroaniline', 'microphotographic', 'mastoideocentesis', 'subtrochleariform', 'dehydrochlorinase', 'agathokakological', 'unproduceableness', 'geissolomataceous', 'spectrohelioscope', 'temperamentalness', 'immunofluorescent', 'epidemiologically', 'pseudoancestrally', 'archimperialistic', 'archiepiscopality', 'antiphilosophical', 'agathokakological', 'multitudinousness', 'subspecialization', 'noncontiguousness', 'temporosphenoidal', 'semimonarchically', 'nonalliteratively', 'electromechanical', 'supernumerousness', 'pantagruelistical', 'anthropomophitism', 'psychotherapeutic', 'transexperiential'],
  18: ['nonritualistically', 'noncommunistically', 'unadvantageousness', 'interincorporation', 'hypidiomorphically', 'overrepresentation', 'uncontemptuousness', 'chemosensitivities', 'unquestionableness', 'bronchohemorrhagia', 'saccharomycetaceae', 'unproportionedness', 'biobibliographical', 'nonirrevocableness', 'tuberculatospinous', 'lymphosarcomatosis', 'microencapsulation', 'hyalinocrystalline', 'electroosmotically', 'splanchnodiastasis', 'interdependability', 'indecipherableness', 'creatinephosphoric', 'antivivisectionist', 'hypersensitization', 'interdiffusiveness', 'actinoelectrically', 'subsuperficialness', 'anthropomorphitism', 'geoparallelotropic', 'transdiaphragmatic', 'semischolastically', 'presuperintendency', 'cholecystectomized', 'epididymovasostomy', 'superaccommodating', 'semimathematically', 'phytohemagglutinin', 'stoechiometrically', 'hypergrammatically', 'incircumscriptible', 'chlorofluorocarbon', 'inexpressibilities', 'neuropsychological', 'antiadministration', 'oversuspiciousness', 'actinoelectrically', 'photomorphogenesis', 'evolutionistically', 'chemotherapeutical', 'interdifferentiate', 'calcaneoastragalar', 'hypergeneticalness', 'acrotrophoneurosis', 'nonrudimentariness', 'superrighteousness', 'inequipotentiality', 'overdiscouragement', 'supersensitisation', 'hypsilophodontidae', 'nonsubstitutionary', 'electroosmotically', 'pseudoaggressively', 'chromolithographer', 'nonpsychologically', 'hypergrammatically', 'pseudoaristocratic', 'chorioepitheliomas', 'misunderstandingly', 'pneumonoerysipelas', 'unostentatiousness', 'pseudostereoscopic', 'pseudorhombohedral', 'antivivisectionist', 'thermomagnetically', 'intercommunication', 'pseudocotyledonary', 'polychromatophilia', 'anthropoteleoclogy', 'supraconsciousness', 'bioinstrumentation', 'chamaesiphonaceous', 'christianopaganism', 'unintelligibleness', 'semimathematically', 'nonsyllogistically', 'radiosterilization', 'inappreciativeness', 'extraparliamentary', 'unrepresentational', 'sulphmethemoglobin', 'omnirepresentative', 'hepatoduodenostomy', 'chromochalcography', 'ureteronephrectomy', 'overdepressiveness', 'extraterrestrially', 'consciencelessness', 'tetrakishexahedron', 'unenterprisingness'],
  19: ['nonappreciativeness', 'incontrovertibility', 'macrolinguistically', 'vectorcardiographic', 'aristorepublicanism', 'chronogrammatically', 'otorhinolaryngology', 'eulamellibranchiate', 'overdescriptiveness', 'zygomaticomaxillary', 'electroretinography', 'scrofulotuberculous', 'unsanctimoniousness', 'hyperdiabolicalness', 'zygomaticoauricular', 'superintellectually', 'faradocontractility', 'nonintermittentness', 'interdifferentiated', 'ultrabrachycephalic', 'periosteomedullitis', 'contrarevolutionary', 'hepaticogastrostomy', 'rontgenographically', 'remisrepresentation', 'counterproductivity', 'interprofessionally', 'noncontemptibleness', 'hypsibrachycephalic', 'ultramicrochemistry', 'superresponsibility', 'dibromoacetaldehyde', 'phytosociologically', 'pseudoindependently', 'phosphomonoesterase', 'chemicoastrological', 'conceptualistically', 'phosphoglycoprotein', 'anticonventionalist', 'overobjectification', 'oversacrificialness', 'counterdemonstrator', 'autoschediastically', 'parachromatophorous', 'pectinatofimbricate', 'pseudoindependently', 'diethylethanolamine', 'phenomenalistically', 'anatomopathological', 'phoenicopteriformes', 'noninterpretational', 'echoencephalography', 'intraecclesiastical', 'unauthoritativeness', 'electrosherardizing', 'impossibilification', 'underrepresentation', 'superchivalrousness', 'autoschediastically', 'overgesticulatively', 'subdolichocephalism', 'hepaticogastrostomy', 'hyperridiculousness', 'ophthalmophlebotomy', 'antisupernaturalist', 'pseudoanachronistic', 'overspeculativeness', 'diethylaminoethanol', 'overobjectification', 'extralinguistically', 'semiantiministerial', 'semiarchitecturally', 'superabominableness', 'protobasidiomycetes', 'phytogeographically', 'autotransplantation', 'ornithobiographical', 'nonconversationally', 'nondistributiveness', 'ultracentrifugation', 'noncommunicableness', 'pseudochromesthesia', 'pericardiacophrenic', 'electrophotographic', 'hesperornithiformes', 'pseudocartilaginous', 'extralinguistically', 'hypersuggestibility', 'nonapprehensibility', 'unmisunderstandable', 'neuroleptoanalgesia', 'electropsychrometer', 'counterintelligence', 'inextinguishability', 'allotransplantation', 'litiscontestational', 'overprocrastination', 'nonpsychoanalytical', 'electrophysiologist', 'tetrafluoroethylene'],
  20: ['phototelegraphically', 'pseudoscientifically', 'superconformableness', 'nondeterminativeness', 'institutionalisation', 'overpresumptuousness', 'heteropolysaccharide', 'semiprofessionalized', 'pseudoaristocratical', 'monobromoacetanilide', 'predisadvantageously', 'pseudoparenchymatous', 'ureterosigmoidostomy', 'existentialistically', 'neuropharmacological', 'nonimperialistically', 'superceremoniousness', 'proindustrialization', 'orbiculatoelliptical', 'hypsibrachycephalism', 'pseudophenanthroline', 'anopisthographically', 'gastroduodenostomies', 'transubstantiatively', 'hyperconscientiously', 'neurochorioretinitis', 'uranostaphylorrhaphy', 'superphlogistication', 'chronocinematography', 'orbiculatoelliptical', 'theologicohistorical', 'micropaleontological', 'noncontemplativeness', 'noncommunicativeness', 'anitinstitutionalism', 'noncondescendingness', 'hyperdolichocephalic', 'neurochorioretinitis', 'pseudoexperimentally', 'electrometallurgical', 'thermopolymerization', 'chemotherapeuticness', 'anatomicochirurgical', 'ballistocardiography', 'tribophosphorescence', 'nonconcentrativeness', 'antienvironmentalism', 'dimethylanthranilate', 'hyperphosphorescence', 'superrespectableness', 'electrophysiological', 'intercrystallization', 'chemoautotrophically', 'galvanocontractility', 'philodestructiveness', 'hyperconscientiously', 'antiaristocratically', 'micropaleontological', 'proindustrialisation', 'micromorphologically', 'nonanachronistically', 'chemicomineralogical', 'counterestablishment', 'internationalisation', 'nondeterminativeness', 'hexosemonophosphoric', 'encephalomyocarditis', 'parallelogrammatical', 'pseudophenanthroline', 'electropneumatically', 'ophthalmothermometer', 'naphthalenesulphonic', 'anatomicochirurgical', 'adrenocorticosteroid', 'anthropoteleological', 'nonaccommodatingness', 'subdiaphragmatically', 'counterrevolutionize', 'antienvironmentalism', 'precomprehensiveness', 'noncomprehensiveness', 'uncomprehensibleness', 'pseudoaffectionately', 'vagoglossopharyngeal', 'palaeoanthropography', 'gastroduodenostomies', 'overmilitaristically', 'protocatechualdehyde', 'hyperphosphorescence', 'nondemonstrativeness', 'establismentarianism', 'antitintinnabularian', 'cinephotomicrography', 'diphenylchloroarsine', 'noncannibalistically', 'ultradolichocephalic', 'philodestructiveness', 'cinephotomicrography', 'superrespectableness', 'piezocrystallization']
};
module.exports = {
  words: words
};

/***/ }),

/***/ 895:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss
var styles = __webpack_require__(922);
;// CONCATENATED MODULE: ./src/styles/index.scss

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(styles/* default */.Z, options);



/* harmony default export */ const src_styles = (styles/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/js/splash.js
var createSplashWindow = function createSplashWindow() {
  var playButton = document.createElement('button');
  playButton.type = 'button';
  playButton.id = 'play';
  playButton.innerHTML = 'play';
  var instructionsButton = document.createElement('button');
  instructionsButton.type = 'button';
  instructionsButton.id = 'instructions';
  instructionsButton.innerHTML = 'instructions';
  var splashButtons = document.createElement('div');
  splashButtons.id = 'splash-buttons';
  splashButtons.appendChild(playButton);
  splashButtons.appendChild(instructionsButton);
  var splashWindow = document.createElement('div');
  splashWindow.id = 'splash-window';
  splashWindow.append(splashButtons);
  var main = document.querySelector('#main');
  main.appendChild(splashWindow);
};
var hideSplashWindow = function hideSplashWindow() {
  var splashWindow = document.querySelector('#splash-window');
  splashWindow.classList.add('hidden');
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(319);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(575);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(913);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./src/dictionary/words.js
var words = __webpack_require__(36);
;// CONCATENATED MODULE: ./src/js/typing.js




/* eslint-disable no-void */

var Typing = /*#__PURE__*/function () {
  function Typing() {
    classCallCheck_default()(this, Typing);

    this.level = 1;
    this.currentIndex = 0;
    this.inputString = '';
    this.setMatchContainer();
  }

  createClass_default()(Typing, [{
    key: "reset",
    value: function reset() {
      this.inputString = '';
      this.currentIndex = 0;
      var matchContainer = document.querySelector('#match-container');

      toConsumableArray_default()(matchContainer.children).forEach(function (child) {
        child.style.color = 'gray';
      });
    }
  }, {
    key: "setMatchString",
    value: function setMatchString() {
      var wordsArrayAtLevel = words.words[this.level + 2];
      var randomWord = wordsArrayAtLevel[Math.floor(Math.random() * 100)];
      this.matchString = randomWord;
    }
  }, {
    key: "setMatchContainer",
    value: function setMatchContainer() {
      this.setMatchString();
      var matchContainer = document.querySelector('#match-container');
      matchContainer.innerHTML = '';
      this.matchString.split('').forEach(function (_char) {
        var charSpan = document.createElement('span');
        charSpan.innerText = _char;
        matchContainer.appendChild(charSpan);
      });
      var typingWindow = document.querySelector('#typing-window');
      typingWindow.innerHTML = matchContainer.outerHTML;
    }
  }, {
    key: "correctLetter",
    value: function correctLetter() {
      return this.inputString[this.currentIndex] === this.matchString[this.currentIndex];
    }
  }, {
    key: "match",
    value: function match() {
      return this.inputString === this.matchString;
    }
  }]);

  return Typing;
}();
var createTypingWindow = function createTypingWindow() {
  var typingWindow = document.createElement('div');
  typingWindow.id = 'typing-window';
  typingWindow.classList.add('hidden');
  var matchContainer = document.createElement('div');
  matchContainer.id = 'match-container';
  typingWindow.appendChild(matchContainer);
  var main = document.querySelector('#main');
  main.appendChild(typingWindow);
};
var showTypingWindow = function showTypingWindow() {
  var typingWindow = document.querySelector('#typing-window');
  typingWindow.classList.remove('hidden');
  typingWindow.classList.add('visible');
  return typingWindow;
};

var errorAnimation = function errorAnimation() {
  var matchContainer = document.querySelector('#match-container'); // reset animation for word shake

  matchContainer.classList.remove('animate-shake');
  void matchContainer.offsetWidth;
  matchContainer.classList.add('animate-shake'); // reset animation for word highlight

  toConsumableArray_default()(matchContainer.children).forEach(function (child) {
    child.classList.remove('animate-highlight');
    void child.offsetWidth;
    child.classList.add('animate-highlight');
  });
};

var keyDownListener = function keyDownListener() {
  var typing = new Typing();
  var matchContainer = document.querySelector('#match-container');
  document.addEventListener('keydown', function (_ref) {
    var key = _ref.key;
    var currentLetter = matchContainer.children[typing.currentIndex];
    typing.inputString += key;

    if (typing.correctLetter()) {
      currentLetter.style.color = 'black';
      typing.currentIndex += 1;

      if (typing.match()) {
        typing.level += 1;
        typing.setMatchContainer();
        typing.reset();
      }
    } else {
      errorAnimation();
      typing.reset();
    }
  });
};
;// CONCATENATED MODULE: ./src/js/repeat.js


var Repeat = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Repeat() {
    _classCallCheck(this, Repeat);

    this.level = 1;
    this.setValue();
  }

  _createClass(Repeat, [{
    key: "setValue",
    value: function setValue() {
      this.value = 11 - this.level;
    }
  }]);

  return Repeat;
}()));
var createRepeatWindow = function createRepeatWindow() {
  var RepeatWindow = document.createElement('div');
  RepeatWindow.id = 'repeat-window';
  RepeatWindow.classList.add('hidden');
  var progressBar = document.createElement('progress');
  progressBar.id = 'progress-bar';
  progressBar.max = 100;
  progressBar.value = 0;
  RepeatWindow.append(progressBar);
  var main = document.querySelector('#main');
  main.appendChild(RepeatWindow);
};
var showRepeatWindow = function showRepeatWindow() {
  var RepeatWindow = document.querySelector('#repeat-window');
  RepeatWindow.classList.remove('hidden');
  RepeatWindow.classList.add('visible');
  return RepeatWindow;
};
var keyUpListener = function keyUpListener() {
  var repeat = new Repeat();
  var progressBar = document.querySelector('#progress-bar');
  document.addEventListener('keyup', function (_ref) {
    var key = _ref.key;

    if (key === ' ') {
      progressBar.value += repeat.value;
    }

    if (progressBar.value === 100) {
      progressBar.value = 0;
      repeat.level += 1;
      repeat.setValue();
    }
  });
};
;// CONCATENATED MODULE: ./src/index.js




window.addEventListener('load', function () {
  createSplashWindow();
  createTypingWindow();
  createRepeatWindow();
});

var gameLoop = function gameLoop() {
  var typingWindow = showTypingWindow();
  typingWindow.onkeydown = keyDownListener(); // const repeatWindow = showRepeatWindow();
  // repeatWindow.onkeydown = keyUpListener();
};

document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'play') {
    hideSplashWindow();
    gameLoop();
  }
});

/***/ }),

/***/ 922:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 15:
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},
0,[[895,666]]]);