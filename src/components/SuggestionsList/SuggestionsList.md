### Examples

With no results:

```js { "props": { "data-example": "No Results" } }
<div style={{ minHeight: '52px' }}>
  <SuggestionsList
    noResultsText="No results found"
  />
</div>
```

When loading:

```js { "props": { "data-example": "When Loading" } }
<div style={{ minHeight: '88px' }}>
  <SuggestionsList
    isLoading={true}
    loadingText={'Searching for \'Chris\''}
    groupedItems={[{ title: 'Suggested Users', items: [], showHeader: true }]}
  />
</div>
```

With results:

```js { "props": { "data-example": "When Results" } }
<div style={{ minHeight: '297px' }}>
  <SuggestionsList
    search="Cris"
    isLoading={true}
    loadingText={'Searching for \'Cris\''}
    groupedItems={[
      {
        title: 'Suggested Users',
        items: [{
          id: 1,
          imageUrl: '',
          name: 'Cristiana Cline',
          description: 'Data Analyst'
        }, {
          id: 2,
          imageUrl: '',
          name: 'Cristian Sayers',
          description: 'Front-End Developer'
        }, {
          id: 3,
          imageUrl: '',
          name: 'Johanna Cristian Lorenz',
          description: 'Information Architecture'
        }, {
          id: 4,
          imageUrl: '',
          name: 'Lidia Holloway Cristina',
          description: 'Senior Designer'
        }, {
          id: 5,
          imageUrl: '',
          name: 'Nestor Cristian Wilke',
          description: 'Product Manager'
        }]
      }
    ]}
    selectedIndex={2}
  />
</div>
```

