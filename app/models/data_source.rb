# == Schema Information
#
# Table name: data_sources
#
#  id         :integer          not null, primary key
#  name       :string
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class DataSource < QuranApiRecord
  has_many :resource_contents
end
