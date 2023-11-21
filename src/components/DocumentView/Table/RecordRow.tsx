import { DocumentTableViewGrid } from '@gitbook/api';

import { tcls } from '@/lib/tailwind';

import { RecordColumnValue } from './RecordColumnValue';
import { TableRecordKV, TableViewProps } from './Table';

export async function RecordRow(
    props: TableViewProps<DocumentTableViewGrid> & {
        record: TableRecordKV;
    },
) {
    const { view } = props;

    return (
        <tr>
            {view.columns.map((column) => {
                return (
                    <td
                        key={column}
                        className={tcls(
                            'border',
                            'border-dark/2',
                            'px-2',
                            'py-1',
                            'dark:border-light/2',
                        )}
                    >
                        <RecordColumnValue key={column} {...props} column={column} />
                    </td>
                );
            })}
        </tr>
    );
}
