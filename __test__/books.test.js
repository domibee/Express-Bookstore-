process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("../app");
const db = require("../db");
const Book = require("../models/book");


describe ("Route tests", function(){
    
    beforeEach(async function(){
        await db.query("DELETE FROM books");

        let book = await Book.create({
            "isbn": "B0BPWWFQ11",
            "amazon_url": "https://a.co/d/gUpEPhs",
            "author": "Akumi Agitogi",
            "language": "english",
            "pages": 208,
            "publisher": "B0BPWWFQ11",
            "title": "My Happy Marriage 04 (Manga)",
            "year": 2023
          });
    });

    describe("GET /books", function(){
        test("can get list of books", async function(){
            let resp= await Book.findAll();
            expect(resp).toEqual([{
                "isbn": "B0BPWWFQ11",
                "amazon_url": "https://a.co/d/gUpEPhs",
                "author": "Akumi Agitogi",
                "language": "english",
                "pages": 208,
                "publisher": "B0BPWWFQ11",
                "title": "My Happy Marriage 04 (Manga)",
                "year": 2023
              }]);
        });
    });

    

})
afterAll(async function() {
    await db.end();
  });