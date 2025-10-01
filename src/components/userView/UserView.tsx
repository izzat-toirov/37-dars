import React, { FC } from 'react';

interface IProps {
  data: any[];
}

const UserView: FC<IProps> = ({ data }) => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((i) => (
          <div
            key={i.id}
            className="border rounded-2xl  p-5 bg-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                {i.name.firstname[0].toUpperCase()}
                {i.name.lastname[0].toUpperCase()}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{i.name.firstname} {i.name.lastname}</h3>
                <p className="text-sm text-gray-500">@{i.username}</p>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> {i.email}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> {i.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserView;
