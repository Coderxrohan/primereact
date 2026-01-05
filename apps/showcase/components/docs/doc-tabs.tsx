'use client';

import { cn } from '@primeuix/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
    { key: 'features', label: 'FEATURES', href: (c: string) => `/docs/components/${c}` },
    { key: 'api', label: 'API', href: (c: string) => `/docs/components/${c}/api` },
    { key: 'theming', label: 'THEMING', href: (c: string) => `/docs/components/${c}/theming` },
    { key: 'pt', label: 'PASS THROUGH', href: (c: string) => `/docs/components/${c}/pt` }
];

const DocTabs = ({ componentName }: { componentName: string }) => {
    const pathname = usePathname();

    const activeTab = pathname.split('/')?.[4] ?? 'features';

    const hasApiPage =
        pathname.endsWith('/api') ||
        pathname.endsWith('/theming') ||
        pathname.endsWith('/pt');

    return (
        <ul className="doc-tabmenu">
            {tabs
                .filter((tab) => tab.key !== 'api' || hasApiPage)
                .map((tab, index) => (
                    <li key={index} className={cn({ 'doc-tabmenu-active': activeTab === tab.key })}>
                        <Link href={tab.href(componentName)}>
                            <button type="button">{tab.label}</button>
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

export default DocTabs;
