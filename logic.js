var NameArray = [];

async function ReadTextFile() {
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
        PointsCalculated = Array[i].Genesis * 1000 + Array[i].Mystic * 100 + Array[i].Arctic * 45 + Array[i].Forest * 16 + Array[i].Savannah * 5;
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
    if(parseInt(Array[i].Points) > 0 && parseInt(Array[i].Points) < 50 ) {
      Counter22++;
    } else if(parseInt(Array[i].Points) < 100) {
      Counter21++;
    } else if(parseInt(Array[i].Points) < 150) {
      Counter20++;
    } else if(parseInt(Array[i].Points) < 200) {
      Counter19++;
    } else if(parseInt(Array[i].Points) < 250) {
      Counter18++;
    } else if(parseInt(Array[i].Points) < 400) {
      Counter17++;
    } else if(parseInt(Array[i].Points) < 550) {
      Counter16++;
    } else if(parseInt(Array[i].Points) < 700) {
      Counter15++;
    } else if(parseInt(Array[i].Points) < 850) {
      Counter14++;
    } else if(parseInt(Array[i].Points) < 1000) {
      Counter13++;
    } else if(parseInt(Array[i].Points) < 1500) {
      Counter12++;
    } else if(parseInt(Array[i].Points) < 2000) {
      Counter11++;
    } else if(parseInt(Array[i].Points) < 2500) {
      Counter10++;
    } else if(parseInt(Array[i].Points) < 4000) {
      Counter9++;
    } else if(parseInt(Array[i].Points) < 5500) {
      Counter8++;
    } else if(parseInt(Array[i].Points) < 7000) {
      Counter7++;
    } else if(parseInt(Array[i].Points) < 8500) {
      Counter6++;
    } else if(parseInt(Array[i].Points) < 10000) {
      Counter5++;
    } else if(parseInt(Array[i].Points) < 20000) {
      Counter4++;
    } else if(parseInt(Array[i].Points) < 40000) {
      Counter3++;
    } else if(parseInt(Array[i].Points) < 70000) {
      Counter2++;
    } else if(parseInt(Array[i].Points) > 70000) {
      Counter1++;
    }
  }
  document.getElementById("Brother22").innerHTML = Counter22;
  document.getElementById("Brother21").innerHTML = Counter21;
  document.getElementById("Brother20").innerHTML = Counter20;
  document.getElementById("Brother19").innerHTML = Counter19;
  document.getElementById("Brother18").innerHTML = Counter18;
  document.getElementById("Brother17").innerHTML = Counter17;
  document.getElementById("Brother16").innerHTML = Counter16;
  document.getElementById("Brother15").innerHTML = Counter15;
  document.getElementById("Brother14").innerHTML = Counter14;
  document.getElementById("Brother13").innerHTML = Counter13;
  document.getElementById("Brother12").innerHTML = Counter12;
  document.getElementById("Brother11").innerHTML = Counter11;
  document.getElementById("Brother10").innerHTML = Counter10;
  document.getElementById("Brother9").innerHTML = Counter9;
  document.getElementById("Brother8").innerHTML = Counter8;
  document.getElementById("Brother7").innerHTML = Counter7;
  document.getElementById("Brother6").innerHTML = Counter6;
  document.getElementById("Brother5").innerHTML = Counter5;
  document.getElementById("Brother4").innerHTML = Counter4;
  document.getElementById("Brother3").innerHTML = Counter3;
  document.getElementById("Brother2").innerHTML = Counter2;
  document.getElementById("Brother1").innerHTML = Counter1;
}