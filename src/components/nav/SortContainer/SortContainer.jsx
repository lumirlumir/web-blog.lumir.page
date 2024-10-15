'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { FaArrowDownWideShort, FaArrowUpShortWide } from 'react-icons/fa6';
import { GrSort } from 'react-icons/gr';

import { DATA } from '@/data/markdownDocument';

export default function SortContainer() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function onClick(sort, order) {
    const params = new URLSearchParams(searchParams);

    params.set('sort', sort);
    params.set('order', order);

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <h2>
        <GrSort size="16px" /> 정렬
      </h2>
      {/* TODO: Make a reusable component named `SortItem.jsx` */}
      <div>
        <div>
          {DATA.title.reactIcons}
          <sup>
            {DATA.title.name.en}
            {DATA.title.name.ko}
          </sup>
        </div>
        <div>
          <button onClick={() => onClick('title', 'desc')}>
            <FaArrowDownWideShort size="16px" title="내림차순" />
          </button>
          <button onClick={() => onClick('title', 'asc')}>
            <FaArrowUpShortWide size="16px" title="오름차순" />
          </button>
        </div>
      </div>
      <div>
        <div>
          {DATA.created.reactIcons}
          <sup>
            {DATA.created.name.en}
            {DATA.created.name.ko}
          </sup>
        </div>
        <div>
          <button onClick={() => onClick('created', 'desc')}>
            <FaArrowDownWideShort size="16px" title="내림차순" />
          </button>
          <button onClick={() => onClick('created', 'asc')}>
            <FaArrowUpShortWide size="16px" title="오름차순" />
          </button>
        </div>
      </div>
      <div>
        <div>
          {DATA.updated.reactIcons}
          <sup>
            {DATA.updated.name.en}
            {DATA.updated.name.ko}
          </sup>
        </div>
        <div>
          <button onClick={() => onClick('updated', 'desc')}>
            <FaArrowDownWideShort size="16px" title="내림차순" />
          </button>
          <button onClick={() => onClick('updated', 'asc')}>
            <FaArrowUpShortWide size="16px" title="오름차순" />
          </button>
        </div>
      </div>
    </div>
  );
}

// TODO: useCallback hook
