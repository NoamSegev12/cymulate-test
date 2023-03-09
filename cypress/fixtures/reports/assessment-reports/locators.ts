export const getWAFHistoryLocator = (name: string) => `a[href="/waf_reports/?client=${name}"]`;

export const getAttackReportLocator = (attackId: string, userName: string) =>
  `a[href="/waf_category/action?attackID=${attackId}&client=${userName}&history=true&site=https%3A%2F%2Fekslabs.cymulatedev.com"]`;

export const moduleSummaryTitleLocator = '.module-summary-title';

export const scoreTextLocator = '.score-text';