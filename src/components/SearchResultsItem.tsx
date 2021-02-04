import { truncate } from 'lodash';
import React, { FC, useState } from 'react';
import Modal from 'react-modal';
import { Photo } from '../typed/Photo';

const TITLE_TRUNCATE_LENGTH = 64;

export interface SearchListItemProps {
  readonly photo: Photo;
}

const CustomModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const SearchListItem: FC<SearchListItemProps> = ({ photo }) => {
  const [isImagePreview, setIsImagePreview] = useState(false);
  const onClosePreview = () => setIsImagePreview(false);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{photo.id}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{truncate(photo.title, { length: TITLE_TRUNCATE_LENGTH })}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-24 w-24" onClick={() => setIsImagePreview(true)}>
            <img className="h-24 w-24 rounded" src={photo.thumbnailUrl} alt={`Thumbnail of ${photo.title}`} />
          </div>
        </div>
      </td>
      <td>
        <Modal
          isOpen={isImagePreview}
          onRequestClose={onClosePreview}
          style={CustomModalStyles}
          contentLabel={`Preview of "${photo.title}"`}
        >
          <img src={photo.url} alt={`Image preview of ${photo.title}`} />
        </Modal>
      </td>
    </tr>
  );
};
