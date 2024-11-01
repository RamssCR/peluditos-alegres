# Learning C#

## Console Processes
**Write a message on console while leaving a blank line:**
> Console.WriteLine("message")

**Write a message on console**
> Console.Write("message")

**Reading a keyboard key:**
> Console.ReadKey()

**Reading a value from keyboard:**
> Console.ReadLine()

## Variable Types

### Number
**Integer**
> int (Reaches a maximum amount of 10 digits)

> float (Exceds the integer's maximum amount (>10 digits))

**Decimal**
> double

### Text
> string

> char (Only works with singlequotes)

### Boolean
> bool

## Lists

### How to define a Lists
> List\<data-type> name = new List\<data-type>();

### How to iterate List

**Foreach**
> foreach (var item in list) {}

**For Loop**
> for (int i = 0; i < list.Count; i++) {}


## Dictionaries

### How to define a dictionary
> Dictionary\<data-type1, data-type2> name = new Dictionary\<data-type1, data-type2>();

### How to iterate a dictionary
> foreach (KeyValuePair\<string, string> data in dictionary) {}

or

> foreach (var data in dictionary) {}

**Showing key name:**
> data.Key

**Showing key value:**
> data.Value

## String interpolation
> $"this is a {adjective} language to learn"

## String to Char array
> char[] letters = text.ToCharArray()

## String metods

**.Replace(word to replace, new word)**

**.ToUpper()**

**.ToLower()**

**(string[] variableName).Split(separator)**

**.Trim()**

**(text1).Equals(text2)**
**String.Concat(string, string, ...)**
**string.EndsWith(string)**
**string.GetHashCode()**

**1st Exercise**
```CSHARP
int[] primeNumbers = new int[25];
int counter = 0;
int accumulator = 0;

for (int j = 2; counter < 25; j++)
{
    bool isPrime = true;
    for (int k = 2; k <= Math.Sqrt(j); k++)
    {
        if (j % k == 0)
        {
            isPrime = false;
            break;
        }
    }

    if (isPrime)
    {
        primeNumbers[counter] = j;
        accumulator += j;
        counter++;
    }
}

Console.WriteLine("Total accumulation: {0}", accumulator);
```

**2nd Exercise**
```CSHARP
List<string> products = new List<string>();
int choice = 0;

while (choice != 4)
{
    Console.WriteLine("Choose an option:");
    Console.WriteLine("1. Add product:");
    Console.WriteLine("2. View product's list:");
    Console.WriteLine("3. Remove product:");
    Console.WriteLine("4. Exit:");
    choice = int.Parse(Console.ReadLine());

    if (choice == 1)
    {
        Console.WriteLine("Type a product to add to your list");
        string product = Console.ReadLine().ToLower();

        if (!products.Contains(product))
        {
            products.Add(product);
        }
        else
            Console.WriteLine("Product already exists on the products' list");
        Console.WriteLine(Environment.NewLine);
    }

    if (choice == 2)
    {
        Console.WriteLine("List of products");
        foreach (string product in products)
        {
            int position = products.IndexOf(product) + 1;
            Console.WriteLine("{0}. {1}", position, product);
        }
        Console.WriteLine(Environment.NewLine);
    }

    if (choice == 3)
    {
        Console.WriteLine("Type a product to remove from the list");
        string product = Console.ReadLine().ToLower();
        int index = products.IndexOf(product);

        if (index != -1) 
        {
            products.RemoveAt(index); 
        }
        else 
            Console.WriteLine("The product typed doesn't exist {0}", Environment.NewLine);
    }
}
```

**3rd Exercise**
```CSHARP
// Convert short date to long date
string[] months = { "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" };
string date = Console.ReadLine();
string[] splittedDate = date.Split("/");

int monthIndex = int.Parse(splittedDate[0]) - 1;
string month = months[monthIndex];

Console.WriteLine("{0} {1}, {2}", month, splittedDate[1], splittedDate[2]);
```

**4th Exercise**
```CSHARP
List<int> numbers = new List<int>();
string input = "";

// Insert numbers until input is "STOP"
while (input != "stop")
{
    Console.WriteLine("Insert a number");
    input = Console.ReadLine();

    if (input == "stop") break;

    int InputNumber = int.Parse(input);
    if (!numbers.Contains(InputNumber))
    {
        numbers.Add(InputNumber);
    }
    else
        Console.WriteLine("Number already exists on the list");
}


List<int> orderedNumbers = new List<int>();
while (numbers.Count > 0)
{
    int minNumber = Int32.MaxValue;

    foreach (int number in numbers)
    {
        if (number <= minNumber)
        {
            minNumber = number;
        }
    }

    orderedNumbers.Add(minNumber);
    numbers.Remove(minNumber);
}

foreach (int number in orderedNumbers)
{
    Console.WriteLine(number);
}
```


```CSHARP
/// <summary>
/// Calculates the liters consumed by a car
/// with a consume of 5.8 liters per 100 kilometers
/// </summary>
/// <param name="distance">The distance traveled by the car</param>
/// <param name="miles"><see langword="false"/>The distance unit to use (default unit: Km)</param>
/// <returns>The liters consumed by the car</returns>
static double CarConsume(double distance, bool miles = false)
{
    double consume = 5.8 * distance / 100;
    if (!miles) return Math.Round(consume, 2);

    double milesConsume = consume * 0.62137119;
    return Math.Round(milesConsume, 2);
}

static int SumArray(int[] numbers)
{
    if (numbers.Length > 1)
    {
        int[] newNumbers = new int[numbers.Length - 1];
        newNumbers[0] = numbers[0] + numbers[1];

        for (int i = 2; i < numbers.Length; i++)
        {
            newNumbers[i - 1] = numbers[i];
        }

        return SumArray(newNumbers);
    }
    else
        return numbers[0];
}

static int SumInRange(int min, int max)
{
    if (min > max) return 0;
    return min + SumInRange(min + 1, max);
}
```