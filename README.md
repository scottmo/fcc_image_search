# Image Search Abstraction Layer
By Shaocong(Scott) Mo
This project is for [FreeCodeCamp's Project](https://www.freecodecamp.org/challenges/image-search-abstraction-layer)

## User Stories
- I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
- I can paginate through the responses by adding a ?offset=2 parameter to the URL.
- I can get a list of the most recently submitted search strings.

## API
- https://scottmo-fcc-img-search.herokuapp.com/
- GET /api/latest/imagesearch
    - get the 10 most recent search terms
- GET /api/imagesearch/${searchString}?offset=${offset}
    - searchString: input used to search for images
    - offset: page number to see more results

### Examples
https://scottmo-fcc-img-search.herokuapp.com/api/imagesearch/cat?offset=2
