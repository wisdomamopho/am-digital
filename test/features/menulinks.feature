Feature: Validate Menu Links

Scenario: Timeline Content Block Hyperlink

     __bddData({
        description: 'Verify that users can navigate the website and successfully launch a specific link,
        ensuring the correct page loads with no errors.',
        tags: ['hyperlink', 'timeline'],
    });
    
    Given I am on any page of the Quartex Published Site
    And user has navigated to a Timeline content block
    When user scrolls to the hyperlink on the Timeline content block
    Then clicks, then the correct webpage is launched in a new tab

Example:
    | Content block | Timeline item | Link | Webpage launched |
    | https://demo.quartexcollections.com/discovery-aids/the-brownings-a-brief-history | 1845 | View one of their first love letters within The Browning Letters Collection. | https://demo.quartexcollections.com/discovery-aids/the-brownings-a-brief-history#1845 |
