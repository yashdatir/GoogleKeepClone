import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
const Footer = () => (
  <div>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Existing</FilterLink>
  </div>
)
export default Footer
/**
 * <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
 * <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Edited/Trash</FilterLink>
 */