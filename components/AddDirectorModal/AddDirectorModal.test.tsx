import { MockedProvider } from '@apollo/client/testing';
import { CREATE_DIRECTOR } from '@graphql/mutations/director.mutation';
import useDirectorModal from '@store/useDirectorModal';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AddDirectorModal from './AddDirectorModal';

const state = useDirectorModal.getState();

beforeEach(() => {
  useDirectorModal.setState(state);
});

const data = {
  createDirector: {
    _id: '624334c7da7d5d555b44a96f',
    firstName: 'Alex',
    lastName: 'Sarita',
    imageUrl:
      'https://cdn.vox-cdn.com/thumbor/67XmGGQuEC9kdKuvognn-msN-MM=/0x0:1777x999/1200x800/filters:focal(747x358:1031x642)/cdn.vox-cdn.com/uploads/chorus_image/image/54417905/lion_king.0.jpg',
    __typename: 'Director',
  },
};

const mocks = [
  {
    request: {
      query: CREATE_DIRECTOR,
      variables: {
        input: {
          firstName: data.createDirector.firstName,
          lastName: data.createDirector.lastName,
          imageUrl: data.createDirector.imageUrl,
        },
      },
    },
    result: { data },
  },
];

describe('AddDirectorModal', () => {
  fit('should add a new director', async () => {
    useDirectorModal.setState({ isOpen: true });

    const { getByPlaceholderText } = render(
      <MockedProvider mocks={mocks}>
        <AddDirectorModal />
      </MockedProvider>
    );

    const firstName = getByPlaceholderText('First Name');
    const lastName = getByPlaceholderText('Last Name');
    const imageUrl = getByPlaceholderText('Image Url');

    fireEvent.change(firstName, { target: { value: data.createDirector.firstName } });
    fireEvent.change(lastName, { target: { value: data.createDirector.lastName } });
    fireEvent.change(imageUrl, { target: { value: data.createDirector.imageUrl } });

    const button = screen.getByRole('button', {
      name: /submit/i,
    });

    fireEvent.click(button);

    await waitFor(() => {
      expect(button).toHaveAttribute('data-loading');
    });
  });
});
