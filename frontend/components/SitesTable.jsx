'use client'

import Link from 'next/link';

import { useEffect, useState } from 'react';

const SitesTable = () => {
    const [sites, setSites] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/sites');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSites(data);
            } catch (error) {
                console.error("There was an error fetching the sites:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ margin: '0 auto', borderRadius: '8px', overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }}>
            <table className="min-w-full table-auto text-sm text-left text-gray-600">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-3 text-left text-sm whitespace-nowrap">Company</th>
                        <th className="px-4 py-3 text-left text-sm whitespace-nowrap">Industry</th>
                        <th className="px-4 py-3 text-left text-sm whitespace-nowrap">Country</th>
                        <th className="px-4 py-3 text-left text-sm whitespace-nowrap">Rankings</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {sites.map((site) => (
                        <tr key={site.id} className="border-t">
                            <td className="px-4 py-2 text-sm whitespace-nowrap">
                                <Link legacyBehavior href={`/sites/${encodeURIComponent(site.company)}`}>
                                    <a className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 visited:text-purple-600">
                                        {site.company_logo && (
                                            <img src={site.company_logo} alt={`${site.company} logo`} style={{ height: 'auto', width: '60px' }} />
                                        )}
                                        <span>{site.company}</span>
                                    </a>
                                </Link>
                            </td>
                            <td className="px-4 py-2 text-sm whitespace-nowrap">{site.industry}</td>
                            <td className="px-4 py-2 text-sm whitespace-nowrap">{site.country}</td>
                            <td className="px-4 py-2 text-sm whitespace-nowrap">{site.rankings.map(ranking => ranking.metric + ": " + ranking.value).join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SitesTable;



