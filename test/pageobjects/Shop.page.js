
class shop{
    get checkout()
    {
        return $("*=Checkout")
    }

    get cards()
    {
        return $$("div[class='card h-100']")
    }

    async addProductsToCart(products)
    {
        //use this for current class property
        for(let i=0;i<await this.cards.length;i++)
        {
            const card = await this.cards[i].$("div h4 a")
            if(products.includes(card.getText()))
            {
                await this.cards[i].$(".card-footer button").click()
            }

        }
    }
}

module.exports= new shop()