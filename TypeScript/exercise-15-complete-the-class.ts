/**
 * START: Follow the instructions below.
 */

class Currency {
    // Add types for these fields and make them private.
    // Hint: Look at the type of values being passed when `new Currency()`
    // is called below.

    private name: string;
    private code: string;
    private symbol: string;

    // Add types to the constructor parameters.

    constructor(name:string, code:string, symbol:string) {
        this.name = name;

        // Store the `code` and `symbol` parameter values in
        // their corresponding class fields.

        this.code = code
        this.symbol = symbol

    }

    // Methods are public by default.
    // Add a visibility modifier to make it clear this method is public.
    //
    // Add a return type for this method
    // Hint: Look at the inferred return type.

    public describe():string {
        // Replace the `null` values below with the appropriate field values.
        // Hint: Access field values with: this.fieldName

        return `The ${this.name} currency has the code ${this.code} and uses the symbol ${this.symbol}.`;
    }
}

// ----

const currencyNaira = new Currency("Naira", "NGN", "₦");

console.log(currencyNaira);

// Call the `describe()` method on the `currencyNaira` object.

const describeNaira = currencyNaira.describe();
console.log(describeNaira);


// ----

const currencyUsDollar = new Currency("United States dollar", "USD", "$");

console.log(currencyUsDollar);

// Call the `describe()` method on the `currencyUsDollar` object.

const descriptionUsDollar = currencyUsDollar.describe();
console.log(descriptionUsDollar);

// ----

export {};
