Feature: Review By Collections
    @slow
    Scenario: Select Collection
        __bddData({
                description: 'The website displays a list of all asset collections, allowing users to navigate to their contents.',
                tags: ['explore', 'assets'],
            })
        Given user is viewing the Browse by collection Name A-Z content block
        When user selects a letter to browse
        Then the page is scrolled to display all collections starting with the chosen letter
        Examples:
            | Letter | Collection      |
            | W      | War & Conflict  |
    
    Scenario: Verify Collection Results
        Given user has chosen to view all collections starting with a chosen letter
        When user clicks on the collection
        Then user is navigated to the results page with the header equal to chosen collection title
        And number of assets within the collection are listed
        And the title of an asset is visible
        Example:
            | Letter | Collection | Number of results | Title of listed asset |
            | W | War &amp; Conflict | 18 | Memoirs of a Prisoner of War |
