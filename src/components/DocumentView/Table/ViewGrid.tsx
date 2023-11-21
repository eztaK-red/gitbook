import { DocumentTableViewGrid } from '@gitbook/api';

import { tcls } from '@/lib/tailwind';

import { RecordRow } from './RecordRow';
import { TableViewProps } from './Table';

export function ViewGrid(props: TableViewProps<DocumentTableViewGrid>) {
    const { block, view, records, style } = props;

    return (
        <table
            className={tcls(
                style,
                'table-auto',
                'w-full',
                block.data.fullWidth ? ['max-w-full'] : null,
            )}
        >
            {view.hideHeader ? null : (
                <thead>
                    <tr>
                        {view.columns.map((column) => {
                            return (
                                <th
                                    key={column}
                                    className={tcls(
                                        'border',
                                        'border-dark/4',
                                        'px-2',
                                        'py-1',
                                        'dark:border-light/4',
                                    )}
                                >
                                    {block.data.definition[column].title}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
            )}
            <tbody>
                {records.map((record) => {
                    return <RecordRow key={record[0]} {...props} record={record} />;
                })}
            </tbody>
        </table>
    );
}
