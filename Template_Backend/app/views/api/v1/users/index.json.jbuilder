json.array! @users do |user|
  json.extract! user, :rut, :ucnum, :name, :lastname_father, :lastname_mother, :mail, :push, :fcm_id, :created_at, :updated_at

  json.sections user.sections_course_numbers(@course.id)
  json.role user.role(@course.id).name
end
