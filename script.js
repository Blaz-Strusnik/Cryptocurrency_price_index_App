
const urlAPI =
	"https://api2.binance.com/api/v3/ticker/24hr";
const getData = async (url) => {
	const response = await fetch(url);
	var data = await response.json();

	//console.log(data);
	if (response) {
		Spinner();
	}
	displayData(data);
/*
// find cryptocurrencies index
//URL to find crytopcurrency https://www.binance.com/en/trade/BTC_USDT?theme=dark&type=spot
	var val = "FTTBUSD"
var index = data.findIndex(function(item, i){
  return item.symbol === val
});

console.log(index);

*/
}
const Spinner = () => {
	document.getElementById('Loading').style.display = 'none';
}

getData(urlAPI);

const displayData = (data) => {
	Object.keys(data).slice(-1).forEach(([key, index, value]) => {
		//console.log(data[0]);
		let table =
		`<thead class="border-b bg-gray-200"><tr>
		<th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">Crypto</th>
		<th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">Price USDT</th>
		<th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">Price change USDT</th>
		<th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">Price EUR</th>
		<th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">Price change EUR</th>
		</tr scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left"></thead>`;

		table += `
		<tbody>
	<tr class="border-b bg-gray-200 ">
	<td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"><i class="fa-brands fa-bitcoin fa-2xl ml-2" style="color:#f7931a"></i><h3>Bitcoin</h3></td>	
	<td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">&dollar;${data[11].lastPrice.slice(0,8)}</td>
	<td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">&dollar;${data[11].priceChange.slice(0,7)}</td>
	<td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">&euro;${data[689].lastPrice.slice(0,8)}</td>
	<td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">&euro;${data[689].priceChange.slice(0,7)}</td>
</tr>
<tr class="border-b bg-gray-200">
<td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"><i class="fa-brands fa-ethereum fa-2xl ml-4 mb-1" style="color:#CDAEFB"></i><h3>Ethereum</h3></td>		
<td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">&dollar;${data[12].lastPrice.slice(0,8)}</td>
<td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">&dollar;${data[12].priceChange.slice(0,7)}</td>
<td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">&euro;${data[690].lastPrice.slice(0,8)}</td>
<td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">&euro;${data[690].priceChange.slice(0,7)}</td>
</tr>
</tbody>`;
document.getElementById("crypto").innerHTML = table;
	
	  });
}

window.setTimeout(function () {
	window.location.reload();
  }, 10000 );
