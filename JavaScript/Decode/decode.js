const readline = require('readline');

const catalog = {
    5: "Chicles",
    8: "Refresco",
    11: "Pan Integral",
    12: "Galletas",
    15: "Leche",
    19: "Harina",
    20: "Azúcar",
    22: "Jabón",
    25: "Aceite",
    28: "Sal",
    35: "Cereal",
    45: "Café",
    51: "Yogur",
    60: "Pasta",
    75: "Arroz",
    90: "Pollo",
    229: "Carne de Res",
    1029: "Huevos",
    2744: "Mermelada"
};

function processBarcodes(barcodes) {
    let invoice = [];
    let errors = [];

    function decodeBarcode(barcode) {
        let accumulated = 0;
        let i = 0;
        while (i < barcode.length) {
            if (barcode[i] === '|') {
                let bars = 0;
                while (barcode[i] === '|') {
                    bars++;
                    i++;
                }
                if (bars === 1) accumulated += 5;
                else if (bars === 2) accumulated *= 3;
                else if (bars >= 3) accumulated = Math.pow(accumulated, bars);
            } else if (barcode[i] === '*') {
                let stars = 0;
                while (barcode[i] === '*') {
                    stars++;
                    i++;
                }
                if (stars === 1) accumulated += 10;
                else if (stars === 2) accumulated *= 2;
                else if (stars >= 3) accumulated = Math.pow(accumulated, 2);
            } else if (barcode[i] === ' ') {
                let spaces = 0;
                while (barcode[i] === ' ') {
                    spaces++;
                    i++;
                }
                accumulated = Math.floor(accumulated / 2);
            } else {
                i++;
            }
        }
        return accumulated;
    }

    barcodes.forEach((barcode) => {
        if (barcode.startsWith('|') && barcode.endsWith('|')) {
            const result = decodeBarcode(barcode);
            if (catalog[result]) {
                let existingProduct = invoice.find(item => item.name === catalog[result]);
                if (existingProduct) {
                    existingProduct.quantity += 1;
                    existingProduct.subtotal += result;
                } else {
                    invoice.push({
                        name: catalog[result],
                        unitPrice: result,
                        quantity: 1,
                        subtotal: result
                    });
                }
            } else {
                errors.push(barcode);
            }
        } else {
            errors.push(barcode);
        }
    });

    let total = invoice.reduce((sum, product) => sum + product.subtotal, 0);

    console.log("\nFactura:");
    console.log("Producto    Precio Unitario    Cantidad    Subtotal");
    console.log("---------------------------------------------------");
    invoice.forEach(product => {
        console.log(
            `${product.name.padEnd(15)}${product.unitPrice.toString().padEnd(20)}${product.quantity.toString().padEnd(15)}${product.subtotal.toString().padEnd(10)}`
        );
    });
    console.log("---------------------------------------------------");
    console.log(`Total: ${total}`);

    if (errors.length > 0) {
        console.log("\nErrores:");
        errors.forEach((error) => {
            console.log(`Código inválido: ${error}`);
        });
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inputBarcodes() {
    const barcodes = [];

    function askForBarcode() {
        rl.question("Introduce un código de barras (o deja vacío para terminar): ", (input) => {
            if (input) {
                barcodes.push(input);
                askForBarcode();
            } else {
                processBarcodes(barcodes);
                rl.close();
            }
        });
    }

    askForBarcode();
}

inputBarcodes();