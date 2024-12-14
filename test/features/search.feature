Feature: Basic Search Functionality
    
    @bdd
    Scenario: Basic Input Search
         __bddData({
            description: 'Verify that the basic search functionality returns correct results based on user input and
            supports filtering options to refine those results.',
            tags: ['search', 'basic'],
        })
        Given I am on any page of the Quartex Published Site
        And I click on the search Icon at the top right
        And I enter a valid search term in the basic search input box
        When I click the search button
        Then I should be navigated to the "Browse All - Demo" page
        Then I should see the first page of search results
        Then the assets listed should meet the search criteria

        Examples:
            | Search term | Number of search results | Title of asset listed |
            | Brown | 59 | 1 April 1875. Browning, Robert to Pollock, Lady. |

    Scenario: Basic Filter Search
        Given I have performed a successful basic search using the keyword "Brown"
        When I select to filter the search results by collection (from the filter results panel)
        Then the assets listed meet the search and filter criteria

        Examples:
            | Search term | Collection filtered by| Number of search results | Title of asset listed |
            | Brown | Interwar Periodicals | 13 | Woman's Weekly, July-December 1919 |
    @webkit
    Scenario: No Results Found
        Given I have performed a successful basic search using the keyword "Quartex"
        When there are no assets meeting the search criteria
        Then I should be navigated to the "Browse All - Demo" page
        And a message should be outputed, informing the user that no results are available
        
        Example:
        | Search term | Message |
        | Quartex | Sorry, no results found that match your criteria. | 

        
