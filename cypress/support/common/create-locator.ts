type Selector = string;

export const getTestIdLocator = (testId: string): Selector => `[test-id="${testId}"]`;

export const getTestLabelLocator = (testLabel: string): Selector => `[test-label="${testLabel}"]`;

export const getDataForLocator = (dataFor: string): Selector => `[data-for="${dataFor}"]`;