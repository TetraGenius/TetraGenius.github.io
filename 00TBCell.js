var container,scene,scene2,backgroundScene,backgroundCamera,camera,cameraLeft,cameraRight,renderer,controls,controls1;var keyboard=new KeyboardState;var WebPath=window.location.pathname.slice(-6);console.log(WebPath+"webpath");if(WebPath=="y.html"){var typeGame=0;var spesGame=1;var setBGPath="textures/cube/Space/";var guiOriginal=1;var tableType="models/obj/tableB.obj";var surfType="models/obj/grass.obj";var BTab="Grid View";var Doption="OFF";var Rainbow="Random";var musicTrue=0;var texture3=(new THREE.TextureLoader).load("textures/grass.jpg");var tetraName="Geometric";var addTetraFlag=0;var loadingF=0;var Xsym="OFF";var Ysym="OFF";var Btable}if(WebPath=="l.html"){var typeGame=0;var spesGame=1;var setBGPath="textures/cube/Space/";var guiOriginal=1;var tableType="models/obj/tableB.obj";var surfType="models/obj/grass.obj";var BTab="Grid View";var Doption="OFF";var Rainbow="Random";var musicTrue=0;var texture3=(new THREE.TextureLoader).load("textures/grass.jpg");var tetraName="Geometric";var addTetraFlag=0;var loadingF=0;var Xsym="OFF";var Ysym="OFF";var Btable}if(WebPath=="S.html"){var typeGame=0;var spesGame=1;var setBGPath="textures/cube/Space/";var guiOriginal=1;var tableType="models/obj/tableB.obj";var surfType="models/obj/grass.obj";var BTab="Grid View";var Doption="OFF";var Rainbow="Random";var musicTrue=0;var texture3=(new THREE.TextureLoader).load("textures/grass.jpg");var tetraName="Geometric";var addTetraFlag=0;var loadingF=0;var Xsym="OFF";var Ysym="OFF";var Btable}if(WebPath=="E.html"){var typeGame=0;var spesGame=0;var setBGPath="textures/cube/Engineering/";var guiOriginal=1;var tableType="models/obj/tableB.obj";var surfType="models/obj/grass.obj";var BTab="Grid View";var Doption="OFF";var Rainbow="Random";var musicTrue=0;var texture3=(new THREE.TextureLoader).load("textures/grass.jpg");var tetraName="SpaceBric";var addTetraFlag=0;var loadingF=0;var Xsym="OFF";var Ysym="OFF";var Btable}if(WebPath=="B.html"){var typeGame=0;var spesGame=1;var setBGPath="textures/cube/Flat/";var guiOriginal=1;var tableType="models/obj/tableB.obj";var surfType="models/obj/grass.obj";var BTab="Grid View";var Doption="OFF";var Rainbow="Random";var musicTrue=0;var texture3=(new THREE.TextureLoader).load("textures/grass.jpg");var tetraName="Geometric";var addTetraFlag=0;var loadingF=0;var Xsym="OFF";var Ysym="OFF";var Btable}if(WebPath=="h.html"){var typeGame=0;var spesGame=0;var setBGPath="textures/cube/Space/";var guiOriginal=1;var tableType="models/obj/tableB.obj";var surfType="models/obj/grass.obj";var BTab="Grid View";var Doption="OFF";var Rainbow="OFF";var musicTrue=0;var texture3=(new THREE.TextureLoader).load("textures/grass.jpg");var tetraName="SpaceBric";var addTetraFlag=0;var loadingF=0;var Xsym="OFF";var Ysym="OFF";var Btable}if(WebPath=="A.html"){var typeGame=0;var spesGame=1;var setBGPath="textures/cube/Art/";var guiOriginal=1;var tableType="models/obj/tableB.obj";var surfType="models/obj/grass.obj";var BTab="Grid View";var Doption="OFF";var Rainbow="Greys";var musicTrue=0;var texture3=(new THREE.TextureLoader).load("textures/grass.jpg");var tetraName="Geometric";var addTetraFlag=0;var loadingF=0;var Xsym="OFF";var Ysym="OFF";var Btable}{var gridHelper,axesHelper;var targetList=[],targetListX=[],targetListY=[],targetListXY=[],savedFiles=[],userLocalName=[],userLocalPass=[];var numSavedFiles=0,current=["NONE",""],currentFile;var activeFiles=[];activeFiles[0]=". ";var numUserL=0;var numUsers=1;var possiX=[],possiY=[],possiZ=[],possiXX=[],possiYX=[],possiZX=[],possiXY=[],possiYY=[],possiZY=[],possiXXY=[],possiYXY=[],possiZXY=[];var TFlagNum=[],TFlagNumX=[],TFlagNumY=[],TFlagNumXY=[],TColour=[],TColourX=[],TColourY=[],TColourXY=[];var rotX=[],rotY=[],rotZ=[],rotXX=[],rotYX=[],rotZX=[],rotXY=[],rotYY=[],rotZY=[],rotXXY=[],rotYXY=[],rotZXY=[],DesT=[];var vv0x=[],vv0y=[],vv0z=[],vv1x=[],vv1y=[],vv1z=[],vv2x=[],vv2y=[],vv2z=[],vv3x=[],vv3y=[],vv3z=[];var count=0;var mirX=[],mirY=[],mirXY=[];var targetOBJ=[];var objects=[];var objectsL=[];var objectXxx=[];var objectX,objectT,objectT1;var lightsP=[];var particleLight;var projector,raycaster,mouse={x:0,y:0},INTERSECTED,isShiftDown=false;var separation=.1;var selectedFaces=[];var floorSide=1e3;var faceColorMaterial,baseColor=new THREE.Color(15654246);var highlightedColor=new THREE.Color(14526976);var selectedColor=new THREE.Color(4482781);var mouseSphereCoords=null;var mouseSphere=[];var material=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors});var light1,light2,light3;var iR,li=2,i,iiL,xi,yi,zi,si,sy,sz,ci=1,cii=1,ciiX=0,ciiY=0,ciiXY=0;var materials=[];var shininess=50,specular=3355443,bumpScale=1,shading=THREE.SmoothShading;var keyCode,KeyCodeUp;var xposi1=3.3003030003033005;var yposi1=2.220020202002022;var zposi1=5.500550500505505;var xxpo=xposi1/(Math.PI/3)*Math.floor(xposi1/Math.floor(xposi1)+yposi1+zposi1-Math.floor(yposi1+zposi1))/Math.PI/Math.floor(xposi1/3);var yypo=5*Math.PI*Math.floor(yposi1/Math.floor(yposi1)+xposi1+zposi1-Math.floor(xposi1+zposi1))/Math.PI/Math.floor(yposi1/10);var zzpo=2*Math.PI*Math.floor(zposi1/Math.floor(zposi1)+xposi1+yposi1-Math.floor(yposi1+xposi1))/Math.PI/Math.floor(zposi1/2.5);var object3,object4,object2;var rotSelect2=[];var rotSelect=[];var octa,octa2,octaX,octaY,octaZ;var cubeColor,backgroundMesh;var folder1;var addTetraFlag2=0,Load2=0,addDesignFlag=0;var designs=[];var textures=[];var Tadd,xxx=0;var TaddD=1;var TransparentBlock="False";var saveOBJ1="SavedOBJ";var colcol="0x2222cc";var colcol2="0x2222cc";var musicC=[];var playingNow;var audio;var loaded;var retrievedObjectA=[];var sentObjectA={};var userObject=[];var USERS={};var retrievedObject;var tetrasL=[];var angleObx=0;var angleOby=0;var angleObz=0;var angleOb=Math.PI;var ciiB=0,ciiA=0}{var material111=new THREE.MeshLambertMaterial({color:3355443,transparent:true,opacity:0});var material11=new THREE.MeshLambertMaterial({color:16777215,transparent:true,opacity:0});var material999=new THREE.MeshLambertMaterial({color:65280,transparent:true,opacity:.3});var material12=new THREE.MeshLambertMaterial({color:16776960,transparent:true,opacity:1});var material13=new THREE.MeshLambertMaterial({color:15662848});var material14=new THREE.MeshLambertMaterial({color:15662848});var material15=new THREE.MeshLambertMaterial({color:16777215,transparent:true,opacity:1});var material16=new THREE.MeshLambertMaterial({color:8396869,transparent:true,opacity:1})}{var tetNames=["TetraPline","Platform","SpaceBric","SquareFlat","Slide","Modern","Torus","Clipped","TetraFrame","TetraMag","ThickStar","ThinStar","Flower","Original","Triangles","Magnet Ball","Pipes","Cubic","Lattice","Half-Pipe","Flatpack","Dragon","Heart-shape","Heart-logo","Leaf","DNA segment","Oval","Sphere0","Sphere1","Sphere2","Sphere3","Sphere4","Organic1","Organic2","Organic3","Globe1","Globe2","Globe3","Globe4","Globe5","Globe6"];var tNames=tetNames.slice(0,5);var tNames2=tetNames.slice(5,13);var tNames3=tetNames.slice(13,19);var tNames4=tetNames.slice(19,26);var tNames5=tetNames.slice(26,31);var tNames6=tetNames.slice(31,40)}if(spesGame==1){var texNames=["Gradient","Central Africa","Antartica","Eurasia","Australia","Canada","Americas","EsherStair","GoldCopper","BlueIce","Silver","Glass","Green","Sandstone","Leaf","Heart","Flowers"];textures=["textures/water.jpg","textures/hieroglyph1.jpg","textures/AntA.png","textures/Inspire6.jpg","textures/inspire.jpg","textures/tomb.jpg","textures/stars9.jpg","textures/curl.jpg","textures/rust.jpg","textures/hightech4.jpg","textures/silverMetal.jpg","textures/skyScr4.jpg","textures/greenMetal.jpg","textures/disturb.jpg","textures/leaf09.png","textures/heart.jpg","textures/sandstone2.jpg"];designs=["models/obj/tetraplineTex2020.obj","models/obj/Platform.obj","models/obj/Original.obj","models/obj/TetraSquare1.obj","models/obj/solid4.obj","models/obj/modern.obj","models/obj/Tetratorus.obj","models/obj/snake.obj","models/obj/Tetraframe1.obj","models/obj/magnetic1.obj","models/obj/slivers2.obj","models/obj/thin.obj","models/obj/press.obj","models/obj/Abstract.obj","models/obj/Triangle.obj","models/obj/magneticball.obj","models/obj/pipe2.obj","models/obj/dice.obj","models/obj/centreFrame1.obj","models/obj/halfpipe2.obj","models/obj/Flatpacka.obj","models/obj/dragon2.obj","models/obj/heart.obj","models/obj/heart3.obj","models/obj/leaf.obj","models/obj/DNA3.obj","models/obj/pipe2018d.obj","models/obj/spacebrickpline.obj","models/obj/sphere1.obj","models/obj/sphere2.obj","models/obj/tox.obj","models/obj/sphere4.obj","models/obj/cubic.obj","models/obj/organic2.obj","models/obj/organic3.obj","models/obj/leaf.obj","models/obj/heart.obj","models/obj/spiral.obj"]}if(spesGame==0){var texNames=["N1","N2","N3","N4","N5","N6","N7","N8","E1","E2","E3","E4","E5","E6","E7","E8","S1","S2","S3","S4","S5","S6","S7","S8","None"];textures=["textures/n1.png","textures/n2.png","textures/n3.png","textures/n4.png","textures/n5.png","textures/n6.png","textures/n7.png","textures/n8.png","textures/e1.png","textures/e2.png","textures/e3.png","textures/e4.png","textures/e5.png","textures/e6.png","textures/e7.png","textures/e8.png","textures/s1.png","textures/s2.png","textures/s3.png","textures/s4.png","textures/s5.png","textures/s6.png","textures/s7.png","textures/s8.png","textures/none.png"];designs=["models/obj/Original.obj","models/obj/TetraSquare1.obj","models/obj/solid4.obj","models/obj/modern.obj","models/obj/globe2.obj","models/obj/Platform.obj","models/obj/Tetratorus.obj","models/obj/snake.obj","models/obj/Tetraframe1.obj","models/obj/magnetic1.obj","models/obj/slivers2.obj","models/obj/thin.obj","models/obj/press.obj","models/obj/Abstract.obj","models/obj/Triangle.obj","models/obj/magneticball.obj","models/obj/pipe2.obj","models/obj/dice.obj","models/obj/CentreFrame1.obj","models/obj/halfpipe2.obj","models/obj/Flatpacka.obj","models/obj/dragon2.obj","models/obj/heart.obj","models/obj/heart3.obj","models/obj/leaf.obj","models/obj/DNA3.obj","models/obj/pipe2018d.obj","models/obj/spacebrickpline.obj","models/obj/sphere1.obj","models/obj/sphere2.obj","models/obj/tox.obj","models/obj/sphere4.obj","models/obj/cubic.obj","models/obj/organic2.obj","models/obj/organic3.obj","models/obj/leaf.obj","models/obj/heart.obj","models/obj/spiral.obj"]}var texFlag=0;var texNum=textures.length-1;var tetraNum=designs.length-1;console.log(tetraNum+"TetraNum");var texture2;