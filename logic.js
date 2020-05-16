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
          "operationName":"GetLandsGrid","variables":{"from":0,"size":4100,"sort":"PriceAsc","criteria":{"owner":null,"type":["Arctic"]}},
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
}