cb = new Array(9);

cb[0] = [
    {id: 'rqb', src: 'scacchi/btor.gif'},
    {id: 'rkb', src: 'scacchi/btor.gif'},
    {id: 'kqb', src: 'scacchi/bcav.gif'}
];


/**
 * create a row of chess cell.
 *
 * @param colsNum the number of checc cells.
 * @returns {Array}
 */
function createEmptyChessRow(colsNum){
    var chessrow = [];
    for (var colIdx = 0; colIdx < colsNum; colIdx++) {
        chessrow.push({});
    }

    return chessrow;
}

function constructChessMatrix(){
    var chessMatrix = [];
    chessMatrix[0] = chessMatrix[3] = chessMatrix[4] = chessMatrix[5] = chessMatrix[6] = createEmptyChessRow(9);
    chessMatrix[1] = [{},
        {
            id: 'rqb',
            src: 'scacchi/btor.gif'
        }, {
            id: 'kqb',
            src: 'scacchi/btor.gif'
        }, {
            id: ''
        }];
    // fill up all the chess matrix array.
}

function build_cb () {
		 cb[0] =["","", "", "", "", "", "", "", ""];
         cb[1] =["",rqb,kqb,bqb,  qb,  kb,bkb,  kkb, rkb ];
         cb[2] =["",p1b,p2b,p3b,p4b,p5b,p6b,p7b,p8b ];
		 cb[3] =["","", "", "", "", "", "", "", ""];
		 cb[4] =["","", "", "", "", "", "", "", ""];
		 cb[5] =["","", "", "", "", "", "", "", ""];
		 cb[6] =["","", "", "", "", "", "", "", ""];
		 cb[7] =["",p1n,p2n,p3n,  p4n,p5n,p6n,p7n,  p8n ];
		 cb[8] =["",rqn,kqn,bqn,  qn,  kn,bkn,  kkn,  rkn ];
}
function get_column (j) {
	if (j==1) {return 'a';}if (j==2) {return 'b';}if (j==3) {return 'c';}
	if (j==4) {return 'd';}if (j==5) {return 'e';}if (j==6) {return 'f';}
	if (j==7) {return 'g';}if (j==8) {return 'h';}return "";
}

var rqb = document.createElement("img");rqb.src ="scacchi/btor.gif"; rqb.id ="rqb";
var rkb = document.createElement("img");rkb.src="scacchi/btor.gif";  rkb.id ="rkb";
var kqb = document.createElement("img");kqb.src="scacchi/bcav.gif";  kqb.id ="kqb";
var kkb=document.createElement("img");kkb.src="scacchi/bcav.gif";    kkb.id ="kkb";
var kk2b=document.createElement("img");kk2b.src="scacchi/bcav.gif";  kk2b.id ="kk2b";
var bqb = document.createElement("img");bqb.src="scacchi/balf.gif";  bqb.id ="qqb";
var bkb=document.createElement("img");bkb.src="scacchi/balf.gif";    bkb.id ="bkb";
var qb = document.createElement("img");qb.src="scacchi/breg.gif";     qb.id ="qb";
var q2b = document.createElement("img");q2b.src="scacchi/breg.gif";     q2b.id ="q2b";
var kb=document.createElement("img");kb.src="scacchi/bree.gif";       kb.id ="kb";
var p1b = document.createElement("img");p1b.src="scacchi/bped.gif";  p1b.id ="p1b";
var p2b = document.createElement("img");p2b.src="scacchi/bped.gif";  p2b.id ="p2b";
var p3b = document.createElement("img");p3b.src="scacchi/bped.gif";  p3b.id ="p3b";
var p4b = document.createElement("img");p4b.src="scacchi/bped.gif";  p4b.id ="p4b";
var p5b = document.createElement("img");p5b.src="scacchi/bped.gif";  p5b.id ="p5b";
var p6b = document.createElement("img");p6b.src="scacchi/bped.gif";  p6b.id ="p6b";
var p7b = document.createElement("img");p7b.src="scacchi/bped.gif";  p7b.id ="p7b";
var p8b = document.createElement("img");p8b.src="scacchi/bped.gif";  p8b.id ="p8b";

var rqn = document.createElement("img");rqn.src="scacchi/ntor.gif";  rqn.id ="rqn";
var rkn=document.createElement("img");rkn.src="scacchi/ntor.gif";    rkn.id ="rkn";
var kqn = document.createElement("img");kqn.src="scacchi/ncav.gif";  kqn.id ="kqn";
var kkn=document.createElement("img");kkn.src="scacchi/ncav.gif";    kkn.id ="kkn";
var kk2n=document.createElement("img");kk2n.src="scacchi/ncav.gif";  kk2n.id ="kk2n";
var bqn = document.createElement("img");bqn.src="scacchi/nalf.gif";  bqn.id ="bqn";
var bkn=document.createElement("img");bkn.src="scacchi/nalf.gif";    bkn.id ="bkn";
var qn = document.createElement("img");qn.src="scacchi/nreg.gif";    qn.id ="qn";
var q2n = document.createElement("img");q2n.src="scacchi/nreg.gif";  q2n.id ="q2n";
var kn=document.createElement("img");kn.src="scacchi/nree.gif";      kn.id ="kn";
var p1n = document.createElement("img");p1n.src="scacchi/nped.gif";  p1n.id ="p1n";
var p2n = document.createElement("img");p2n.src="scacchi/nped.gif";  p2n.id ="p2n";
var p3n = document.createElement("img");p3n.src="scacchi/nped.gif";  p3n.id ="p3n";
var p4n = document.createElement("img");p4n.src="scacchi/nped.gif";  p4n.id ="p4n";
var p5n = document.createElement("img");p5n.src="scacchi/nped.gif";  p5n.id ="p5n";
var p6n = document.createElement("img");p6n.src="scacchi/nped.gif";  p6n.id ="p6n";
var p7n = document.createElement("img");p7n.src="scacchi/nped.gif";  p7n.id ="p7n";
var p8n = document.createElement("img");p8n.src="scacchi/nped.gif";  p8n.id ="p8n";



