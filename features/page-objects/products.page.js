class ProductsPage {
    open() {
      return browser.url("/Products");
    }

    async titleProductPage(){
      const titlePage = await $(".title").getText();
      return titlePage;
    }

    get dataList(){
        return this._dataList;
    }

    set dataList(data){
        return this._dataList = data;
    }

    async fillProductNames(){
        const elementslist = await $$("//div[@class='inventory_item_description']//a//div");
        const dataList = [];

        for (const element of elementslist) {
            dataList.push(await element.getText());
          }
          this._dataList = dataList;
      }
  }
  
  module.exports = new ProductsPage();


  