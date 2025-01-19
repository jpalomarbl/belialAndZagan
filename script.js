const main = document.getElementsByClassName('container')[0];
const innerCircle = document.getElementsByClassName('star__inner-circle')[0];
const logo = document.getElementsByClassName('logo')[0];
const logoBackground = document.getElementsByClassName('logo__background')[0];
const backgroundBelial = document.getElementsByClassName('background__belial')[0];
const backgroundZagans = document.getElementsByClassName('background__zagans')[0];

document.addEventListener('DOMContentLoaded', () => {  
    // Espera 2 segundos antes de aplicar la clase
    setTimeout(() => {
      main.classList.add('background__common');
      innerCircle.classList.add('background__common');
    }, 1000);

    setTimeout(() => {
      logo.classList.add('logo--show');
      logoBackground.classList.add('logo__background--show');
      backgroundBelial.classList.add('background-show');
      backgroundZagans.classList.add('background-show');
    }, 3000);
  });

// set up text to print, each item in array is new line
var aText = new Array(
  "There are only 10 types of people in the world:", 
  "Those who understand binary, and those who don't"
  );

  const belialQuotesLatin = [
    "Belial amatores suos non protegit, sed eos tandem tradit perditioni.",
    "Ut fumus dispergitur, ita filii Belial a facie Domini pereunt.",
    "Belial numquam apertis armis pugnat, sed semper dolis.",
    "Filii Belial semper inter se dissident, quia veritas eis aliena est.",
    "In obscuritate cordium habitat Belial, lumen fugiendo.",
    "Belial semper promittit sed numquam implet, illusiones vendens.",
    "Inter daemonia, Belial princeps deceptionis et mendacii est.",
    "Belial victimas suas ad fastigium gloriae ducit, ut deinde eas deiciat.",
    "Nulla mens purificata potest Belial seductionibus cedere.",
    "Dolos Belial nullus sapientissimus mortalium facile detegit.",
    "Sicut abyssus vocat abyssum, sic animae corruptae Belial sequuntur.",
    "Belial virtutem odit, et eam in omnibus exterminare conatur.",
    "Nullus amor, nullus misericordia in corde Belial habitat.",
    "Belial adversus omnia divina constituta insurgit.",
    "Qui ad Belial clamorem respondet, veram pacem numquam inveniet.",
    "Belial corda hominum implet desideriis carnalibus et ambitione.",
    "Potentia Belial non est vis, sed serpentinus calliditas.",
    "Belial diuturnam voluptatem promittit, sed ad breve dolorem ducit.",
    "Sicut ignis aridam stipulam, sic Belial animas devorat.",
    "Eloquentia Belial arma potentissima sunt ad animas decipiendas.",
    "Filii Belial terram sicut vermes corrupti infestant.",
    "Belial fallaciam semper sub specie veritatis celat.",
    "Nulla virtus in Belial residet, solum abyssus pravitatis.",
    "Qui Belial sequitur, a lumine veritatis discedit.",
    "Belial magnas promissiones facit, sed semper vacuas.",
    "Serpentinus motus Belial regnum eius perfidum significat.",
    "Belial numquam aperta pugna vincit, sed insidiis latet.",
    "In corde peccatoris habitat Belial, consolationem simulans.",
    "Belial odit lucem veritatis et amator est tenebrarum.",
    "Nullus daemon tam molli sermone decipit sicut Belial.",
    "Filios suos Belial ex alto spernebat ut ludibria.",
    "Quicumque cum Belial foedus init, cruciatum aeternum accipit.",
    "Belial detestatur honestatem et veritatem in omni forma.",
    "Sicut venenum latens in poculo, sic praesentia Belial.",
    "Belial hominibus libertatem promittit, sed servitutem offert.",
    "Praesentia Belial affert confusionem et corruptionem omnibus.",
    "Belial odit pietatem, eamque delere conatur in omnibus locis.",
    "Omnia quae Belial tangit, ad nihilum redeunt.",
    "Filii Belial mendacium et superbiam tanquam divinitatem colunt.",
    "Belial voluntatem hominis frangit subtili dolo.",
    "Daemon Belial se aliquando tamquam angelum lucis praebet.",
    "Subtilitas Belial omnes hominum mentis angulos explorat.",
    "Vox Belial est suavis, sed eius consilia mortem afferunt.",
    "Belial vitam aeternae tenebrae, non lucis, promittit.",
    "Virtutes omnes corruunt sub tactu Belial.",
    "Belial inter daemonia maximus est hostis rationis.",
    "Quilibet depravatus spiritus a Belial sumit exemplum.",
    "Belial templum veritatis in cordibus hominum destruit.",
    "Ad invocationem suam Belial numquam lucem affert, solum tenebras.",
    "Rugitus Belial resonat per noctem, animos terrens.",
    "Filii Belial nullam legem agnoscunt, nisi suam libidinem.",
    "Belial ad praecipitia semper ducit eos qui ei credunt.",
    "Lingua Belial plenum est venenorum serpentium.",
    "Nulla pax inter filios Belial et Dei servos est.",
    "Belial ad extremum seipsum consumet, sicut flamma sine cibo.",
    "Belial non potest numquam veritatem sequi vel amare.",
    "Corruptio Belial totam terram sua umbra obtegit.",
    "Belial spes humanitatis semper frustra habet.",
    "Omnia quae a Belial promittuntur, vana et effimera sunt.",
    "Filii Belial in omni bono odium habent.",
    "Praesentia Belial potestatem bonorum solvit.",
    "Belial semper pugnat, sed numquam ad veram victoriam pervenit.",
    "Per deceptionem Belial suae regnum aedificat.",
    "Belial homines ad nihilum perditio ducit, sapientia simulata."
  ];
  
  
  const zaganQuotesLatin = [
    "Zagan in mysteriis alchemiae peritissimus habetur, mutatioe omnia regens.",
    "Qui Zagan invocat, arcana transformationis interiorem detegit.",
    "Zagan, dominus artis mutabilitatis, animae motus figurat.",
    "Ex evocatis suis, Zagan ingenium et perspicaciam excitat.",
    "Virtutes Zagan omnia vincunt quae fixa et immota videntur.",
    "Zagan res naturales transcendit et limites humanae perceptionis dilatat.",
    "Mysteria mundi sub signis Zagan latenter patent.",
    "Zagan auram mutationis in circumiectis suis generat.",
    "Virtutes Zagan potentiam occultam in hominum cordibus incitant.",
    "Praesentia Zagan rebus communibus magnitudinem tribuit.",
    "Zagan arcana sapientiae dat, quae aliter latuissent.",
    "Dona Zagan aditum ad transformationes inauditas praebent.",
    "Per potentiam Zagan, omnia quae sunt mutabilia manent.",
    "Sigillum Zagan perfectam transformationem et congruentiam significat.",
    "Zagan praeter physicas substantias, etiam animas mutat.",
    "Opera Zagan sunt testimonium mobilitatis universi.",
    "Praesentia Zagan veritates invisibiles revelat evocatoribus.",
    "Zagan stultis potentiam cognitionis offert.",
    "Transformationes Zagan omni tempori aptae sunt.",
    "Zagan transitum inter corpora materialia et spiritualia regit.",
    "Creaturae sub Zagan forma suae naturae dominum agnoscunt.",
    "Zagan memorias umbras in lumine mutationis ponit.",
    "Zagan dualitatem divinae et humanae naturae investigat.",
    "Potentia Zagan, quicquid tactu tangit, purificat.",
    "In Zagan regnum novae perceptionis oritur.",
    "Zagan nobis docet ut inconstantiam universi amplectamur.",
    "Per Zagan mutatio timorem in fortitudinem transmutat.",
    "Signa Zagan concordiam chaosque simul evocant.",
    "Evocatio Zagan transformationes in cordibus incitat.",
    "Zagan apparet ubi finis unius res initium alterius est.",
    "Vox Zagan potentiam verborum mutabilitatis exprimit.",
    "Zagan est dominus aequilibrii inter mutationem et stabilitatem.",
    "Mysteria occulta sub vocibus Zagan latent.",
    "In conspectu Zagan, confusio ordo fit.",
    "Zagan omnis evocationis potentiam ad summum attingit.",
    "Spiritus Zagan transformationes vastas, sed stabilitas infundit.",
    "Praesentia Zagan formam terrarum figit.",
    "Omnes mutationes sub signo Zagan reverentiam merentur.",
    "Artifex transformationis, Zagan fines inter elementa transgreditur.",
    "Filii Zagan viam ad veritatem per mutationem quaerunt.",
    "Zagan figura centralis alchemiae infernalis apparet.",
    "Virtutes Zagan interiorem serenitatem inspirant.",
    "Per Zagan mundi veritas transmutationis clare fit.",
    "Zagan latentem potentiam in omni re aperit.",
    "Nulla materia, nulla anima, a tactu Zagan immutata evadit.",
    "Sigillum Zagan claves alchemicae in se continet.",
    "Facultates Zagan omnes res ad unitatem conducunt.",
    "Zagan, alchemistam infernalem, materiam spiritumque aeque dominatur.",
    "Veritas sub mutationibus, doctrinam Zagan perspicit.",
    "Zagan mutationem formare tamquam instrumentum pro pace promovet.",
    "Zagan insidias subtiliter ad transformationem parat.",
    "Eloquentia Zagan mutationes in animos humanos instillat.",
    "Praesentia Zagan significat finem chaos ordinemque principium.",
    "Sub signo Zagan, potentia generis humani amplificatur.",
    "Filii Zagan sapientiam mutationis ediscunt.",
    "Sigillum Zagan elementum ignis et aquae miscet.",
    "Vocibus Zagan alchimia universi celebratur.",
    "Zagan mutationem subiectivam et obiectivam adfert.",
    "Per doctrinam Zagan, homines mundum in melius vertunt.",
    "Aetas mutationis sub lumine Zagan revelatur.",
    "Sub Zagan, omnia quae dura videntur mollescunt.",
    "Zagan in tenebris lucem veritatis ignis accendit.",
    "In evocando Zagan, mutatio fit ratio universalis.",
    "Sapientia Zagan ultra perceptionem materialem extenditur.",
    "Zagan nos admonet quod in mutatione stabilitas latet.",
    "Magister alchemiae, Zagan spiritum et materiam simul sublimat.",
    "Ad mutationem veritatemque, Zagan viam recludit."
  ];
  
  

  var iSpeed = 50; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = 147 // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriterBelial()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementsByClassName("background__belial")[0];
   
   while ( iRow < iIndex ) {
    sContents += belialQuotesLatin[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + belialQuotesLatin[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != belialQuotesLatin.length ) {
     iArrLength = belialQuotesLatin[iIndex].length;
     setTimeout("typewriterBelial()", 500);
    }
   } else {
    setTimeout("typewriterBelial()", iSpeed);
   }
  }

  function typewriterZagan()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementsByClassName("background__zagans")[0];
   
   while ( iRow < iIndex ) {
    sContents += zaganQuotesLatin[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + zaganQuotesLatin[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != zaganQuotesLatin.length ) {
     iArrLength = zaganQuotesLatin[iIndex].length;
     setTimeout("typewriterZagan()", 500);
    }
   } else {
    setTimeout("typewriterZagan()", iSpeed);
   }
  }
  
  
  typewriterBelial();
  typewriterZagan();