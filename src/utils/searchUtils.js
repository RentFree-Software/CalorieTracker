/**
 * Check if a food name matches the search query.
 *
 * Matching behavior:
 * - All search terms must appear in the food name (AND logic)
 * - Terms can appear in any order and any position
 * - Search is case-insensitive
 * - Empty search returns true (shows all foods)
 *
 * Examples:
 * - "chicken takeaway" matches "Grilled Chicken Takeaway"
 * - "salad" matches "Salad dressing (César)"
 * - "chocolate milk" matches "Milk, Chocolate flavored"
 *
 * @param {string} foodName - The food item name to check
 * @param {string} searchQuery - The search query (one or more words)
 * @returns {boolean} - True if food matches the search
 */
export function matchesSearchQuery(foodName, searchQuery) {
  // Empty search shows all foods
  if (!foodName || !searchQuery?.trim()) {
    return true;
  }

  // Normalize to lowercase for case-insensitive comparison
  const foodNameLower = foodName.toLowerCase();
  const searchQueryLower = searchQuery.toLowerCase().trim();

  // Break search into individual terms
  const searchTerms = searchQueryLower.split(/\s+/).filter(Boolean);

  // All terms must be found in the food name (any order, any position)
  return searchTerms.every(term => foodNameLower.includes(term));
}
