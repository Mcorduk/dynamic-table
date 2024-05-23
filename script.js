const API_URL = "https://rest.coinapi.io/v1/exchangerate/TRY";

async function fetchData() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Accept: "text/json",
        "X-CoinAPI-Key": "C5D652E6-4C5D-4AA1-8F93-8E7E5652613B", // Use Vite env variable
      },
      params: {
        invert: true,
        filter_asset_id:
          "BTC,ETH,USDT,BNB,XRP,ADA,SOL,DOT,DOGE,USDC,DAI,BCH,LTC,UNI,LINK,AAVE,SUSHI,MKR,COMP,SNX", // Replace with your desired assets (up to 20)
      },
    });

    if (response.status !== 200) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return formatData(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    // You can also display an error message to the user here
    return [];
  }
}

function formatData(data) {
  return data.rates.map((item) => ({
    tarih: formatDate(item.time),
    sembol: item.asset_id_quote,
    fiyat: formatPrice(item.rate),
  }));
}

function formatDate(timestamp) {
  return new Date(timestamp).toLocaleString("tr-TR");
}

function formatPrice(value) {
  const formatter = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  });
  return formatter.format(value);
}

$(document).ready(async function () {
  const data = await fetchData();

  if (data.length > 0) {
    initializeDataTable(data);
  } else {
    console.error("No data to display");
  }
});

function initializeDataTable(data) {
  $("#dataTable").DataTable({
    data,
    columns: [
      { data: "tarih", title: "Tarih" },
      { data: "sembol", title: "Sembol" },
      { data: "fiyat", title: "Fiyat" },
    ],
    searching: true,
    ordering: true,
    caseInsensitive: true,
    responsive: true,
    colReorder: true,
    dom: "Bfrtip",
    buttons: ["copy", "csv", "excel", "print", "pdf"],
  });
}
