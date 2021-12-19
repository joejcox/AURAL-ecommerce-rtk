# Documenting my journey

## Initialise project, identify required routes and add folder structure indicated in readme

**Start date (UK):** 19/12/2021

I have so far added a README.md file which documents my learning outcomes, scripts to use, file structure and how I will approach the project.

### Initial Set Up

The project has been created using `create-react-app` and the `redux template`.

I have established all required routes I should need within the app.

### Git commits

I have found an article on Medium which details ideal commit messages - [Writing Meaningful Git Commit Messages](https://medium.com/@menuka/writing-meaningful-git-commit-messages-a62756b65c81)

The article was written in 2017 but I don't see why it wouldn't still be good practice.

### Identifying required routes

As this is an e-commerce website, all of the routes are pretty standard. The website is not going to be used commercially so no GDPR related routes will be set up.

**Routes**

_Public Routes_
home: `/`
all products: `/shop`
departments: `/shop/:department-name`\*
single Product: `/shop/:product-id`
search results: `/search/:term`
cart: `/cart`
checkout: `/checkout`
sign up: `/sign-up`
sign in: `/sign-in`

_Private Routes_
account: `/account`
wishlist: `/account/wishlist`
orders: `/account/orders`
settings: `/account/settings`

_\*department names will be saved in firestore as the document id, since user does not control these names, there should be no casing issues when using Firebase queries_