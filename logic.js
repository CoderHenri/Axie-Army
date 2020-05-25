var NameArray = [];

var GenesisMulti = 1000;
var MysticMulti = 100;
var ArcticMulti = 45;
var ForestMulti = 16;
var SavannahMulti = 5;

var Limit22 = 25;
var Limit21 = 50;
var Limit20 = 100;
var Limit19 = 150;
var Limit18 = 200;
var Limit17 = 350;
var Limit16 = 500;
var Limit15 = 650;
var Limit14 = 800;
var Limit13 = 1000;
var Limit12 = 1500;
var Limit11 = 2000;
var Limit10 = 2500;
var Limit9 = 4000;
var Limit8 = 5500;
var Limit7 = 7000;
var Limit6 = 8500;
var Limit5 = 10000;
var Limit4 = 20000;
var Limit3 = 40000;
var Limit2 = 70000;
var Limit1 = 70000;

var ArrayList22 = [];
var ArrayList21 = [];
var ArrayList20 = [];
var ArrayList19 = [];
var ArrayList18 = [];
var ArrayList17 = [];
var ArrayList16 = [];
var ArrayList15 = [];
var ArrayList14 = [];
var ArrayList13 = [];
var ArrayList12 = [];
var ArrayList11 = [];
var ArrayList10 = [];
var ArrayList9 = [];
var ArrayList8 = [];
var ArrayList7 = [];
var ArrayList6 = [];
var ArrayList5 = [];
var ArrayList4 = [];
var ArrayList3 = [];
var ArrayList2 = [];
var ArrayList1 = [];

function WriteRankingLimit() {

  document.getElementById("PointExplanation").innerHTML = "One Genesis Plot equals " + GenesisMulti + " Points" + "<br />" 
    + "One Mystic Plot equals " + MysticMulti + " Points" + "<br />" + "One Arctic Plot equals " + ArcticMulti + " Points" + "<br />"
    + "One Forest Plot equals " + ForestMulti + " Points" + "<br />" + "One Savannah Plot equals " + SavannahMulti + " Points";

  document.getElementById("Points22").innerHTML = "1 - " + (Limit22 - 1);
  document.getElementById("Points21").innerHTML = Limit22 + " - " + (Limit21 - 1);
  document.getElementById("Points20").innerHTML = Limit21 + " - " + (Limit20 - 1);
  document.getElementById("Points19").innerHTML = Limit20 + " - " + (Limit19 - 1);
  document.getElementById("Points18").innerHTML = Limit19 + " - " + (Limit18 - 1);
  document.getElementById("Points17").innerHTML = Limit18 + " - " + (Limit17 - 1);
  document.getElementById("Points16").innerHTML = Limit17 + " - " + (Limit16 - 1);
  document.getElementById("Points15").innerHTML = Limit16 + " - " + (Limit15 - 1);
  document.getElementById("Points14").innerHTML = Limit15 + " - " + (Limit14 - 1);
  document.getElementById("Points13").innerHTML = Limit14 + " - " + (Limit13 - 1);
  document.getElementById("Points12").innerHTML = Limit13 + " - " + (Limit12 - 1);
  document.getElementById("Points11").innerHTML = Limit12 + " - " + (Limit11 - 1);
  document.getElementById("Points10").innerHTML = Limit11 + " - " + (Limit10 - 1);
  document.getElementById("Points9").innerHTML = Limit10 + " - " + (Limit9 - 1);
  document.getElementById("Points8").innerHTML = Limit9 + " - " + (Limit8 - 1);
  document.getElementById("Points7").innerHTML = Limit8 + " - " + (Limit7 - 1);
  document.getElementById("Points6").innerHTML = Limit7 + " - " + (Limit6 - 1);
  document.getElementById("Points5").innerHTML = Limit6 + " - " + (Limit5 - 1);
  document.getElementById("Points4").innerHTML = Limit5 + " - " + (Limit4 - 1);
  document.getElementById("Points3").innerHTML = Limit4 + " - " + (Limit3 - 1);
  document.getElementById("Points2").innerHTML = Limit3 + " - " + (Limit2 - 1);
  document.getElementById("Points1").innerHTML = Limit1 + "+ ";
}

async function ReadTextFile() {
  WriteRankingLimit();
  NameArray = await AsyncTextReader();
  GetLandData();
}

function AsyncTextReader() {
  return new Promise(function (resolve, reject) {
      var objXMLhttp = new XMLHttpRequest()
      objXMLhttp.open("GET", './Textfiles/Profile_Loom_Eth_Addresses.txt', true);
      objXMLhttp.send();
      objXMLhttp.onreadystatechange = function(){
      if (objXMLhttp.readyState == 4){
        if(objXMLhttp.status == 200) {
          var TestParse = objXMLhttp.responseText;
          TestParse = JSON.parse(TestParse);
          return resolve(TestParse);
        } else {
          return resolve("error");
        }
      }
    }
  });

}

async function GetLandData() {
    var url = "https://axieinfinity.com/graphql-server/graphql";

    var LandDataArray = [];

        //Genesis
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
          "operationName":"GetLandsGrid","variables":{"from":0,"size":100,"sort":"PriceAsc","criteria":{"owner":null,"type":["Genesis"]}},
          "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
        })
        .then(function(response) { 
          return response.json(); 
        })
        
        .then(function(data) {
          LandDataArray.push(data);
      });
    
        //Mystic
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
          "operationName":"GetLandsGrid","variables":{"from":0,"size":2400,"sort":"PriceAsc","criteria":{"owner":null,"type":["Mystic"]}},
          "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
      })
      .then(function(response) { 
        return response.json(); 
      })
        
      .then(function(data) { 
        LandDataArray.push(data);
      });
      
        //Arctic
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
          "operationName":"GetLandsGrid","variables":{"from":0,"size":4300,"sort":"PriceAsc","criteria":{"owner":null,"type":["Arctic"]}},
          "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
        })
        .then(function(response) { 
          return response.json(); 
        })
        
        .then(function(data) { 
            LandDataArray.push(data);
      });
      
        //Forest
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
          "operationName":"GetLandsGrid","variables":{"from":0,"size":5400,"sort":"PriceAsc","criteria":{"owner":null,"type":["Forest"]}},
          "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
        })
        .then(function(response) { 
          return response.json(); 
        })
        
        .then(function(data) { 
            LandDataArray.push(data);
      });
      
        //Savannah
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
          "operationName":"GetLandsGrid","variables":{"from":0,"size":5400,"sort":"PriceAsc","criteria":{"owner":null,"type":["Savannah"]}},
          "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
        })
        .then(function(response) { 
          return response.json(); 
        })
        
        .then(function(data) { 
            LandDataArray.push(data);
            console.log(LandDataArray);
            ArraySorter(LandDataArray);
      });
}

function ArraySorter(RawArray) {
    var CombinedArray = [];
    var NumberedArray = [];
    var UniqueOwnerArray = [];

    for(i=0; i < RawArray.length; i++) {
        var m = 0;
        while(m < RawArray[i].data.lands.result.length) {
            CombinedArray.push({LoomOwner : RawArray[i].data.lands.result[m].owner, LandType : RawArray[i].data.lands.result[m].landType});
            m++;
        }
    }
    CombinedArray.sort((a,b) => b.LoomOwner - a.LoomOwner);
    console.log(CombinedArray);

    for(p=0; p < CombinedArray.length; p++) {
        if(CombinedArray[p].LandType == "Genesis") {
            NumberedArray.push({LoomOwner : CombinedArray[p].LoomOwner, Genesis : 1, Mystic : 0, Arctic : 0, Forest : 0, Savannah : 0});
        } else if(CombinedArray[p].LandType == "Mystic") {
            NumberedArray.push({LoomOwner : CombinedArray[p].LoomOwner, Genesis : 0, Mystic : 1, Arctic : 0, Forest : 0, Savannah : 0});
        } else if(CombinedArray[p].LandType == "Arctic") {
            NumberedArray.push({LoomOwner : CombinedArray[p].LoomOwner, Genesis : 0, Mystic : 0, Arctic : 1, Forest : 0, Savannah : 0});
        } else if(CombinedArray[p].LandType == "Forest") {
            NumberedArray.push({LoomOwner : CombinedArray[p].LoomOwner, Genesis : 0, Mystic : 0, Arctic : 0, Forest : 1, Savannah : 0});
        } else if(CombinedArray[p].LandType == "Savannah") {
            NumberedArray.push({LoomOwner : CombinedArray[p].LoomOwner, Genesis : 0, Mystic : 0, Arctic : 0, Forest : 0, Savannah : 1});
        }
    }

    for(i = 0; i < NumberedArray.length; i++) {
        if(i > 0) {
            if(NumberedArray[i].LoomOwner == UniqueOwnerArray[UniqueOwnerArray.length-1].LoomOwner) {
                UniqueOwnerArray[UniqueOwnerArray.length-1].Genesis = UniqueOwnerArray[UniqueOwnerArray.length-1].Genesis + NumberedArray[i].Genesis;
                UniqueOwnerArray[UniqueOwnerArray.length-1].Mystic = UniqueOwnerArray[UniqueOwnerArray.length-1].Mystic + NumberedArray[i].Mystic;
                UniqueOwnerArray[UniqueOwnerArray.length-1].Arctic = UniqueOwnerArray[UniqueOwnerArray.length-1].Arctic + NumberedArray[i].Arctic;
                UniqueOwnerArray[UniqueOwnerArray.length-1].Forest = UniqueOwnerArray[UniqueOwnerArray.length-1].Forest + NumberedArray[i].Forest;
                UniqueOwnerArray[UniqueOwnerArray.length-1].Savannah = UniqueOwnerArray[UniqueOwnerArray.length-1].Savannah + NumberedArray[i].Savannah;
            } else {
                UniqueOwnerArray.push({LoomOwner : NumberedArray[i].LoomOwner, Genesis : NumberedArray[i].Genesis, Mystic : NumberedArray[i].Mystic, Arctic : NumberedArray[i].Arctic, Forest : NumberedArray[i].Forest, Savannah : NumberedArray[i].Savannah});
            }
        } else {
            UniqueOwnerArray.push({LoomOwner : NumberedArray[i].LoomOwner, Genesis : NumberedArray[i].Genesis, Mystic : NumberedArray[i].Mystic, Arctic : NumberedArray[i].Arctic, Forest : NumberedArray[i].Forest, Savannah : NumberedArray[i].Savannah});
        }
    }
    console.log(UniqueOwnerArray);
    PointConverter(UniqueOwnerArray);
}

function PointConverter(Array) {
    var PointArray = [];
    
    for(i=0; i < Array.length; i++) {
        var PointsCalculated = 0;
        PointsCalculated = Array[i].Genesis * GenesisMulti + Array[i].Mystic * MysticMulti + Array[i].Arctic * ArcticMulti + Array[i].Forest * ForestMulti + Array[i].Savannah * SavannahMulti;
        PointArray.push({LoomOwner : Array[i].LoomOwner, Points : PointsCalculated});
    }
    PointArray.sort((a,b) => b.Points - a.Points);
    console.log(PointArray);
    ProfileNamer(PointArray);
}

async function ProfileNamer(Array) {
  
    var url = "https://axieinfinity.com/graphql-server/graphql"
    
    for(i=0; Array.length > i; i++) {
        var loomAddy = Array[i].LoomOwner;
        ethAddy = JSON.stringify(loomAddy);
        var FetchChecker = "NEIN";
        FetchChecker = "NEIN";
        
        for(x=0; NameArray.length > x; x++) {
            if(NameArray[x].Loom == Array[i].LoomOwner) {
            Array[i].LoomOwner = NameArray[x].Besitzer;
            FetchChecker = "JA";
            break;
            }
        }
        
        if(FetchChecker == "NEIN") {
            await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            
            body: JSON.stringify({
                operationName:"GetProfileByLoomAddress",
                variables:{
                loomAddress:loomAddy
                },
                query:"query GetProfileByLoomAddress($loomAddress: String!) {\n  publicProfileWithLoomAddress(loomAddress: $loomAddress) {\n    ...Profile\n    __typename\n  }\n}\n\nfragment Profile on PublicProfile {\n  accountId\n  name\n  addresses {\n    ...Addresses\n    __typename\n  }\n  __typename\n}\n\nfragment Addresses on NetAddresses {\n  ethereum\n  tomo\n  loom\n  __typename\n}\n"})
            })
            
            .then(function(response) { 
            return response.json(); 
            })
        
            .then(function(data) {
            var realName = "";
            try {
                realName = data.data.publicProfileWithLoomAddress.name;
            }
            catch {
                realName = "No User Profile";
            }
            Array[i].LoomOwner = realName;
            });
        }
    }
    console.log(Array);
  NumberofBrothers(Array);
}

function NumberofBrothers(Array) {
  var Counter22 = 0;
  var Counter21 = 0;
  var Counter20 = 0;
  var Counter19 = 0;
  var Counter18 = 0;
  var Counter17 = 0;
  var Counter16 = 0;
  var Counter15 = 0;
  var Counter14 = 0;
  var Counter13 = 0;
  var Counter12 = 0;
  var Counter11 = 0;
  var Counter10 = 0;
  var Counter9 = 0;
  var Counter8 = 0;
  var Counter7 = 0;
  var Counter6 = 0;
  var Counter5 = 0;
  var Counter4 = 0;
  var Counter3 = 0;
  var Counter2 = 0;
  var Counter1 = 0;

  for(i=0; Array.length > i; i++) {
    if(parseInt(Array[i].Points) > 0 && parseInt(Array[i].Points) < Limit22 ) {
      Counter22++;
      ArrayList22.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit21) {
      Counter21++;
      ArrayList21.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit20) {
      Counter20++;
      ArrayList20.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit19) {
      Counter19++;
      ArrayList19.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit18) {
      Counter18++;
      ArrayList18.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit17) {
      Counter17++;
      ArrayList17.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit16) {
      Counter16++;
      ArrayList16.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit15) {
      Counter15++;
      ArrayList15.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit14) {
      Counter14++;
      ArrayList14.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit13) {
      Counter13++;
      ArrayList13.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit12) {
      Counter12++;
      ArrayList12.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit11) {
      Counter11++;
      ArrayList11.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit10) {
      Counter10++;
      ArrayList10.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit9) {
      Counter9++;
      ArrayList9.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit8) {
      Counter8++;
      ArrayList8.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit7) {
      Counter7++;
      ArrayList7.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit6) {
      Counter6++;
      ArrayList6.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit5) {
      Counter5++;
      ArrayList5.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit4) {
      Counter4++;
      ArrayList4.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit3) {
      Counter3++;
      ArrayList3.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) < Limit2) {
      Counter2++;
      ArrayList2.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    } else if(parseInt(Array[i].Points) > Limit1) {
      Counter1++;
      ArrayList1.push({Player : Array[i].LoomOwner, Points : Array[i].Points});
    }
  }

  for(m = 1; m <= 22; m++) {
    var Brothertext = "Brother"+m;
    var Counter = 0;
    if(m == 1) {
      Counter = Counter1;
    } else if(m == 2) {
      Counter = Counter2;
    } else if(m == 3) {
      Counter = Counter3;
    } else if(m == 4) {
      Counter = Counter4;
    } else if(m == 5) {
      Counter = Counter5;
    } else if(m == 6) {
      Counter = Counter6;
    } else if(m == 7) {
      Counter = Counter7;
    } else if(m == 8) {
      Counter = Counter8;
    } else if(m == 9) {
      Counter = Counter9;
    } else if(m == 10) {
      Counter = Counter10;
    } else if(m == 11) {
      Counter = Counter11;
    } else if(m == 12) {
      Counter = Counter12;
    } else if(m == 13) {
      Counter = Counter13;
    } else if(m == 14) {
      Counter = Counter14;
    } else if(m == 15) {
      Counter = Counter15;
    } else if(m == 16) {
      Counter = Counter16;
    } else if(m == 17) {
      Counter = Counter17;
    } else if(m == 18) {
      Counter = Counter18;
    } else if(m == 19) {
      Counter = Counter19;
    } else if(m == 20) {
      Counter = Counter20;
    } else if(m == 21) {
      Counter = Counter21;
    } else if(m == 22) {
      Counter = Counter22;
    }
    FirstOption(Brothertext, Counter, m);
  }


  var L = document.getElementById("lds-hourglass");
  L.style.display = "none";
}

function FirstOption(BrotherName, Counter, m) {
  var select = document.getElementById(BrotherName); 
    var opt = Counter; 
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
    select.style.zIndex = 100;

    DisplayList(m);
}

function DisplayList(m) {
  var idSelecter = "Brother" + m;


  var select = document.getElementById(idSelecter); 
  var options = []; 

  if(m == 1) {
    options = ArrayList1;
  } else if(m == 2) {
    options = ArrayList2;
  } else if(m == 3) {
    options = ArrayList3;
  } else if(m == 4) {
    options = ArrayList4;
  } else if(m == 5) {
    options = ArrayList5;
  } else if(m == 6) {
    options = ArrayList6;
  } else if(m == 7) {
    options = ArrayList7;
  } else if(m == 8) {
    options = ArrayList8;
  } else if(m == 9) {
    options = ArrayList9;
  } else if(m == 10) {
    options = ArrayList10;
  } else if(m == 11) {
    options = ArrayList11;
  } else if(m == 12) {
    options = ArrayList12;
  } else if(m == 13) {
    options = ArrayList13;
  } else if(m == 14) {
    options = ArrayList14;
  } else if(m == 15) {
    options = ArrayList15;
  } else if(m == 16) {
    options = ArrayList16;
  } else if(m == 17) {
    options = ArrayList17;
  } else if(m == 18) {
    options = ArrayList18;
  } else if(m == 19) {
    options = ArrayList19;
  } else if(m == 20) {
    options = ArrayList20;
  } else if(m == 21) {
    options = ArrayList21;
  } else if(m == 22) {
    options = ArrayList22;
  }

  var x = 1;
  for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = x + ") " + opt.Player + " with " + opt.Points + " Points";
    el.value = opt;
    select.appendChild(el);
    select.style.zIndex = 100;  
    x++;
  }
}

function PointExplainer() {
  alert("Geht");
}

/*
document.getElementById("TList").innerHTML = '<ol class="LL">' + amount.map(function (genesis) {
    return '<li>' + String(genesis["amount"]) + " Plots owned by " + String(genesis["owner"]) + '</li>';
  }).join('') + '</ol>';
*/