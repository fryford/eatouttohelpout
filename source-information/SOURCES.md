# Eat Out to Help Out Map -  Information Sources
## Individually Registered Restaurants
The individually registered restaurant data is from HMRC's published [list](https://github.com/hmrc/eat-out-to-help-out-establishments/blob/f88064e90b9b597ac7aaaab7fe4338102de345cb/data/participating-establishments/restaurants.csv) (as of 5th August)


## Chain Restaurants
It would be infeasible to manually look up and add every chain restaurant by hand. Because of this, a number of scripts were used to aid with the addition of chain restaurants to this map - where a script was used, its source code is linked. However, this may have led to some incorrect additions. If you notice an innaccuracy, please open an issue.

 - **Burger King**: Restaurants on their [list of participating locations](https://www.burgerking.co.uk/eatouttohelpout), processed by [this script](https://gist.github.com/hithomasmorelli/3615471adb7e13ad7f6077740e9e5e60), resulting in [`burger-king-eotho.csv`](chain-restaurants/burger-king/burger-king-eotho.csv)
 - **Costa Coffee**: Restaurants on their [PDF list of locations](https://assets.ctfassets.net/royi30b2qd26/6iGhm7zTsmRG1HeINuLdGj/b1a48b6b9bbb677191ca8998c1baac47/eotho-store-list-200803.pdf) (fetched from [costa.co.uk](https://costa.co.uk) on 5th August), processed by [these scripts](https://gist.github.com/hithomasmorelli/fa4078a15c6565b12251ff122b34cb6c), resulting in [`costa-coffee-eotho.csv`](chain-restaurants/costa-coffee/costa-coffee-eotho.csv)
 - **KFC**: Restaurants on their [list of participating locations](https://www.kfc.co.uk/eoho), processed by [this script](https://gist.github.com/hithomasmorelli/64f7028fdf51ac3923cbcfaf8e8e3990), resulting in [`kfc-eotho.csv`](chain-restaurants/kfc/kfc-eotho.csv)
 - **McDonalds**: Restaurants on their [list of participating locations](https://www.mcdonalds.com/gb/en-gb/latest-updates/eatout-to-helpout.html), processed by [this script](https://gist.github.com/hithomasmorelli/4471cf91f476bdc7cfd79246617fdace/15c0728ccecf323a64bab156e83552ce717a65c7), resulting in [`mcdonalds-eotho.csv`](chain-restaurants/mcdonalds/mcdonalds-eotho.csv)


## A Note on Duplicate Removal <span id="duplicate-removal-header"></span>
Because there are some chain restaurants that are also registered individually, I used a [script]() to check for possible duplicates at the same time as merging CSV files. If two restaurants have the same postcode **and** have a similar name,<sup id="footnote-1-from">[1](#footnote-1)</sup> they are manually checked.

At the same time as checking chain restaurant listings for duplicates, this script also checks the invididually registered list published by HMRC. Because of this, the final CSV file may be missing some rows from HMRC's.

Of course, this could lead to a restaurant being mistakenly removed. If this has happened, please open an issue.


## FAQ (Fully Anticipated Questions)

### How do the scripts get a full address and coordinates from the location information in the lists provided?
The scripts use the [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview) to find full locations from the information provided. However, these locations are not always correct - because of this, any instances where the Geocoding API provides a different postcode to what's on the restaurant chains' list have to be manually reviewed.

### Are you aware that Costa have a [new list](https://assets.ctfassets.net/royi30b2qd26/6iGhm7zTsmRG1HeINuLdGj/0453996299b9c8ded6456f421de5e15a/eotho-store-list-200807.pdf), published on 7th August?
Yes, I am. However, this was published on the same day as their previous list was being processed (which took a lot of manual fixing). After a number of other chain restaurants' locations have been processed, the extra Costa locations will be added.


***If you have a question that isn't answered here, feel free to open an issue.***

---

<sup id="footnote-1">**1**</sup> In checking two locations for a similar name, the script looks for a word of three letters or more that is present in the name of both restaurants [↩](#duplicate-removal-header)